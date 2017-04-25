<?php
	require ("DBConnect.php");
	$permitType = $_GET["permit"];
	$Color = "";
	if ($permitType == 1)
		$Color = "Red";
	else if ($permitType == 2)
		$Color = "Green";
	else if ($permitType == 3)
		$Color = "Blue";
	else if ($permitType == 4)
		$Color = "Yellow";

	$result = mysqli_query($db, "SELECT * FROM parking_locations WHERE parking_permit_id = " . $permitType);
	
	$sql="SELECT parking_locations.Name, parking_locations.location,  parking_status.available_spots, parking_status.total FROM parking_locations  INNER JOIN parking_status ON parking_locations.id = parking_status.id";
	$result1 = mysqli_query($db, $sql);
	
?>

<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="cleartype" content="on">
	<meta name="MobileOptimized" content="320">
	<meta name="HandheldFriendly" content="True">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<link rel="stylesheet" href="css/content.css">
	<link rel="stylesheet" href="css/navigation.css">
	<link rel="stylesheet" href="css/mocha.min.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<title>WhereToPark</title>
</head>
<body>
	<!-- Navigation Sidebar -->
	<nav id="menu" class="menu">
		<header class="menu-header">
			<span class="menu-header-title">WhereToPark</span>
		</header>
		<div class="menu-divider"></div>
		<section class="menu-section">
			<h3 class="menu-section-title">Information</h3>
			<ul class="menu-section-list">
				<li><button type="button" class="menu-item" data-toggle="collapse" data-target="#aboutWTP" onclick="Pop('about_wtp')">About WTP</button></li>
				<div id="aboutWTP" class="collapse">
					<p>
						WhereToPark is a live-feed parking application for those who have trouble finding a good parking spot at Florida Atlantic University. 
						With this web app, people coming to campus can quickly see an overview of FAU parking, 
						choose a destination for close parking, 
						and receive directions to the most optimal parking location. 
						You can select between the various permits and a map will display details of each parking lot designated to that permit.
					</p>
				</div>
				<li><button type="button" class="menu-item" data-toggle="collapse" data-target="#aboutCreators" onclick="Pop('about_creators')">About Creators</button></li>
				<div id="aboutCreators" class="collapse">
					<p>
						We are Senior Computer Sciencist(s)/Engineer(s) majors at FAU. 
						Like any other campus, parking is one of the biggest issues when driving to school. 
						We all have experienced the frustation of driving endless circles around and 
						hopping from lot to lot to find one space.
						We wanted to provide an easy-to-use and efficient application that allowed you to see where parking was available.
					</p>
				</div>
				<li><button type="button" class="menu-item" data-toggle="collapse" data-target="#disclaimer" onclick="Pop('disclaimer')">Disclaimer</button></li>
				<div id="disclaimer" class="collapse">
					<p>
						WhereToPark is a web application renovated from a class project in "Principles of Software Engineering" at FAU and is not intended for professional use. 
						Please be advise that we do NOT encourage our users to use our application while driving. 
						WhereToPark is not responsible for any abuse of this web application by the user. 
						Information provided may not be accurate. 
						Please visit <a href="http://www.fau.edu/parking" target="_blank">FAU Parking</a> for information on parking rules, regulations and policies.
					</p>
				</div>
			</ul>
		</section>
		<div class="menu-divider"></div>
		<section class="menu-section">
			<h3 class="menu-section-title">Settings</h3>
			<ul class="menu-section-list">
				<li>
					<label class="switch">
						<input id="after_hour" type="checkbox" onchange="ChangeAfterHour()">
						<div class="slider round"></div>
						<div class="slider-text">After Hours</div>
					</label>
				</li>
				<li>
					<label class="switch">
						<input id="map_custom" type="checkbox" onchange="ChangeMap()">
						<div class="slider round"></div>
						<div class="slider-text">Custom Map</div>
					</label>
				</li>
			</ul>
		</section>
	</nav>
	<!-- Menu Button -->
	<main id="panel" class="panel">
		<button class="btn-hamburger grey-ham-menu js-slideout-toggle"></button>
		<!-- Google Maps API -->
		<div id="map"></div>
		<script>
			function initMap(map_type)
			{
				var map = new google.maps.Map(document.getElementById("map"), {
					center: {lat: 26.370653, lng: -80.102302},
					zoom: 15,
					disableDefaultUI: true,
					gestureHandling: "cooperative"
				});
				if(map_type == "satellite")
					map.setMapTypeId("satellite");

				<?php
					$lot_num = 0;
					while($row = mysqli_fetch_array($result))
					{
						$result2 = mysqli_query($db, "SELECT * FROM parking_status WHERE id = " . $row["id"]);
						$rows_no=mysqli_num_rows($result2);
						if($rows_no>0){
							while($row2 = mysqli_fetch_array($result2))
					{
							$infowindow ="<b>Name : </b>". $row["Name"]."<br><b>Total Spots : </b>".$row2['total']."<br><b>Available Spots : </b>".$row2["available_spots"];
					}
						}else{
							$infowindow = $row["Name"];
						}
						$path = $row["location"];
						$superpath=explode(";", $path);
						
						
						$return = "[";

						for ($i = 0; $i < count($superpath); $i++)
						{
						   $val1 = explode(",", $superpath[$i])[0];
						   $val2 = explode(",", $superpath[$i])[1];

						   $return = $return . "{lat: " . $val1 . ", lng: " . $val2 . "},";
						}
						$return = rtrim($return, ",");
						$return = $return . "]";
				?>

				var Poli = <?php echo $return; ?>;
				var lot<?php echo $lot_num ?> = new google.maps.Polygon({
					paths: Poli,
					strokeColor: "<?php echo $Color; ?>",
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: "<?php echo $Color; ?>",
					fillOpacity: 0.35 //This opacity will be to determine availability
				});
				lot<?php echo $lot_num ?>.setMap(map);
				lot<?php echo $lot_num ?>.addListener("click",info<?php echo $lot_num ?>);

				var infowindow<?php echo $lot_num ?> = new google.maps.InfoWindow();
				var contentString<?php echo $lot_num ?> = "<?php echo $infowindow.''; ?>";

				function info<?php echo $lot_num?>(event)
				{
					infowindow<?php echo $lot_num?>.setContent(contentString<?php echo $lot_num?>);
					infowindow<?php echo $lot_num?>.setPosition(event.latLng);
					infowindow<?php echo $lot_num?>.open(map);
				}

				<?php $lot_num++; }  ?>
			}
		</script>
		<!-- Footer -->
		<div class="container">
			<div class="row">
				<div class="col-xs-6 bottom-btn">
					<a href="index.php">
						<button id="permitColor" name="permit" type="submit" value="white" class="permit black">HOME</button>
					</a>
				</div>
				<div class="col-xs-6 bottom-btn">
					<!--<button id="go" name="permit" type="submit" value="white" class="permit black">GO!</button>-->
				</div>
			</div>
			<div class="footer row">
				<div class="col-xs-3 bottom-text"></div>
				<div class="col-xs-6 bottom-text company">Kryptos Production</div>
				<div class="col-xs-3 bottom-text"></div>
			</div>
		</div>
	</main>
	<script>
		mocha.setup('bdd');
		var exports = null;
		function assert(expr, msg) { if (!expr) throw new Error(msg || 'failed'); }
    </script>
    <script src="js/slideout.min.js"></script>
    <script src="js/menu.js"></script>
    <script>
		window.onload = function()
		{
			document.querySelector(".js-slideout-toggle").addEventListener("click", function() {
				slideout.toggle();
			});
			document.querySelector(".menu").addEventListener("click", function(eve) {
				if (eve.target.nodeName === "A") { slideout.close(); }
			});
		};
    </script>
	<!-- JavaScript -->
	<script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
	<script src="js/menu-items.js"></script>
	<script src="js/menu-index.js"></script>
	<script src="js/main.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYDeKa_ljpXZo-FgO84uOEuMuDZdDY1bY&callback=ChangeMap" async defer></script>
  </body>
</html>