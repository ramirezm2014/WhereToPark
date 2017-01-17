function initMap()
{
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 26.370653, lng: -80.102302},
		zoom: 15,
		disableDefaultUI: true
	});
	
	var map_design = new google.maps.StyledMapType(
		[
			{
				featureType: 'administrative',
				elementType: 'geometry',
				stylers: [{visibility: 'off'}]
			},
		  	{
				featureType: 'administrative.country',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'administrative.locality',
				stylers: [ {visibility: 'off'}]
			},
			{
				featureType: 'administrative.province',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'landscape',
				stylers: [{saturation: -100},
						  {visibility: 'on'}]
			},
			{
				featureType: 'landscape',
				elementType: 'geometry',
				stylers: [{visibility: 'on'}]
			},
			{
				featureType: 'landscape',
				elementType: 'geometry.fill',
				stylers: [{visibility: 'on'}]
			},
			{
				featureType: 'landscape',
				elementType: 'geometry.stroke',
				stylers: [{color: '#000000'},
						  {visibility: 'on'}]
			},
			{
				featureType: 'landscape',
				elementType: 'labels.icon',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'landscape.natural',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'landscape.natural.landcover',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'landscape.natural.terrain',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'poi',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [{visibility: 'on'}]
			},
			{
				featureType: 'poi',
				elementType: 'labels',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#000000'},
						  {lightness: 40},
						  {visibility: 'on'}]
			},
			{
				featureType: 'road',
				elementType: 'labels',
				stylers: [{saturation: -45}]
			},
			{
				featureType: 'road',
				elementType: 'labels.icon',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{color: '#000000'},
						  {lightness: 15}]
			},
			{
				featureType: 'transit',
				stylers: [{visibility: 'off'}]
			},
			{
				featureType: 'water',
				stylers: [{visibility: 'on'}]
			}
		],
		{name: 'Custom Map'}
	);
	map.mapTypes.set('styled_map', map_design);
	map.setMapTypeId('styled_map');

	var lot1Blue = new google.maps.Polygon({
		paths: [
			{lat: 26.371600, lng: -80.099704},
			{lat: 26.371600, lng: -80.098824},
			{lat: 26.371505, lng: -80.098824},
			{lat: 26.371189, lng: -80.098795},		
			{lat: 26.369740, lng: -80.098783},
			{lat: 26.369740, lng: -80.099180},
			{lat: 26.370075, lng: -80.099180},	
			{lat: 26.370075, lng: -80.099373},
			{lat: 26.370680, lng: -80.099373},	
			{lat: 26.370680, lng: -80.099180},
			{lat: 26.371500, lng: -80.099180},
			{lat: 26.371500, lng: -80.099704},
			{lat: 26.371600, lng: -80.099704}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1Blue.setMap(map);
	
	var lot1Red = new google.maps.Polygon({
		paths: [
			{lat: 26.371498, lng: -80.099629},
			{lat: 26.371498, lng: -80.099182},
			{lat: 26.370682, lng: -80.099182},
			{lat: 26.370682, lng: -80.099629},
			{lat: 26.371498, lng: -80.099629}
		],
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1Red.setMap(map);
}