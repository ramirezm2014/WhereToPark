function initMap()
{
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

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 26.370653, lng: -80.102302},
		zoom: 15,
		disableDefaultUI: true
	});

	map.mapTypes.set('styled_map', map_design);
	map.setMapTypeId('styled_map');
}