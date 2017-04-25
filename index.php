<?php
 require ("DBConnect.php");
 $result = mysqli_query($db, "SELECT * FROM facilities");
?>
<!doctype html>
<html lang="en">
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
						<input id="after_hour" type="checkbox" onchange="SaveAfterHour()">
						<div class="slider round"></div>
						<div class="slider-text">After Hours</div>
					</label>
				</li>
				<li>
					<label class="switch">
						<input id="map_custom" type="checkbox" onchange="SaveMap()">
						<div class="slider round"></div>
						<div class="slider-text">Custom Map</div>
					</label>
				</li>
			</ul>
		</section>
	</nav>
    <main id="panel" class="panel">
		<!-- Menu Button -->
		<button class="btn-hamburger white-ham-menu js-slideout-toggle"></button>
		<!-- Logo and Name -->
		<div class="logoDiv pad"><img src="img/WTP_Logo.png" alt="WhereToPark Logo" id="logo"></div>
		<div class="name pad">WhereToPark</div>
		<!-- Permits -->
		<div class="instruction pad">Select a permit:</div>
		<form action="DBData.php" method="get">
			<div class="container">
				<div class="row">
					<div class="pg1perm col-lg">
						<button name="permit" type="submit" value="1" class="permit staff">STAFF</button>
					</div>
					<div class="pg1perm col-lg">
						<button name="permit" type="submit" value="2" class="permit resident">RESIDENT</button>
					</div>
					<div class="pg1perm col-lg">
						<button name="permit" type="submit" value="3" class="permit nonresident">NON-RESIDENT</button>
					</div>
					<div class="pg1perm col-lg">
						<button name="permit" type="submit" value="4" class="permit guest">GUEST</button>
					</div>
				</div>
			</div>
			<?php
				if (isset($_GET["location"]))
					echo "<input type='hidden' name='loc' value='" . $_GET["location"] . "'>";
			?>
		</form>
		<!-- Location Dropdown -->
		<div class="instruction pad">Select a destination:</div>
		<div class="container">
			<div class="row">
				<form action="index.php" method="get">
					<div class="col-lg">
						<select name="location"><option value="" class="locItem" data="26.318603,-80.163114">- - NONE - -</option>
					<?php while($row = mysqli_fetch_array($result))
					{?>
								<option value="<?php echo $row["building"];?>" class="locItem" data="<?php echo $row["coordinates"];?>"><?php echo $row["building"];?></option>
					<?php }?>
						</select>
					</div>
					<!-- Location Dropdown List -->
				</form>
			</div>
		</div>
		<!-- Footer -->
		<div class="container">
			<div class="row">
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
			$('select').on('change', function() {
				r_data=$(this).children('option:selected').attr('data');
				location.href="https://www.google.com/maps/dir/Current+Location/"+r_data;
})
		};
    </script>
	<!-- JavaScript -->
	<script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
	<script src="js/menu-items.js"></script>
	<script src="js/menu-index.js"></script> 
	<script src="js/main.js"></script>
  </body>
</html>