function handicapPark(map)
{
	var lot1 = new google.maps.Polygon({
		paths: [
			{lat: 26.371297, lng: -80.099754},
			{lat: 26.371297, lng: -80.099662},
			{lat: 26.370800, lng: -80.099662},
			{lat: 26.370800, lng: -80.099754}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot1.setMap(map);
	
	var lot2a = new google.maps.Polygon({
		paths: [
			{lat: 26.372983, lng: -80.099477},
			{lat: 26.372983, lng: -80.099387},
			{lat: 26.372822, lng: -80.099385},
			{lat: 26.372822, lng: -80.099475}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot2a.setMap(map);
	
	var lotEEDrop = new google.maps.Polygon({
		paths: [
			{lat: 26.372457, lng: -80.098764},
			{lat: 26.372457, lng: -80.098667},
			{lat: 26.372329, lng: -80.098667},
			{lat: 26.372329, lng: -80.098764}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotEEDrop.setMap(map);
	
	var lot4Right = new google.maps.Polygon({
		paths: [
			{lat: 26.373256, lng: -80.098445},
			{lat: 26.373293, lng: -80.098403},
			{lat: 26.373293, lng: -80.098267},
			{lat: 26.373206, lng: -80.098267},
			{lat: 26.373206, lng: -80.098445}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Right.setMap(map);
	
	var lot4Lefta = new google.maps.Polygon({
		paths: [
			{lat: 26.374316, lng: -80.101450},
			{lat: 26.374316, lng: -80.101345},
			{lat: 26.373918, lng: -80.101345},
			{lat: 26.373918, lng: -80.101450}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Lefta.setMap(map);
	var lot4Leftb = new google.maps.Polygon({
		paths: [
			{lat: 26.374033, lng: -80.100818},
			{lat: 26.374033, lng: -80.100614},
			{lat: 26.373863, lng: -80.100614},
			{lat: 26.373860, lng: -80.100818}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot4Leftb.setMap(map);
	
	var lot6a = new google.maps.Polygon({
		paths: [
			{lat: 26.373804, lng: -80.103583},
			{lat: 26.373804, lng: -80.103317},
			{lat: 26.373719, lng: -80.103317},
			{lat: 26.373719, lng: -80.103583}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot6a.setMap(map);
	var lot6b = new google.maps.Polygon({
		paths: [
			{lat: 26.373809, lng: -80.102799},
			{lat: 26.373809, lng: -80.102576},
			{lat: 26.373712, lng: -80.102576},
			{lat: 26.373712, lng: -80.102799}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot6b.setMap(map);
	
	var lot7a = new google.maps.Polygon({
		paths: [
			{lat: 26.373972, lng: -80.106201},
			{lat: 26.373972, lng: -80.106112},
			{lat: 26.373729, lng: -80.106112},
			{lat: 26.373729, lng: -80.106201}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot7a.setMap(map);
	var lot7b = new google.maps.Polygon({
		paths: [
			{lat: 26.373981, lng: -80.105103},
			{lat: 26.373981, lng: -80.105012},
			{lat: 26.373741, lng: -80.105005},
			{lat: 26.373741, lng: -80.105096}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot7b.setMap(map);
	var lot7c = new google.maps.Polygon({
		paths: [
			{lat: 26.373986, lng: -80.104753},
			{lat: 26.373986, lng: -80.104665},
			{lat: 26.373755, lng: -80.104665},
			{lat: 26.373755, lng: -80.104753}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot7c.setMap(map);			
	var lot7d = new google.maps.Polygon({
		paths: [
			{lat: 26.374199, lng: -80.103837},
			{lat: 26.374199, lng: -80.103747},
			{lat: 26.374120, lng: -80.103747},
			{lat: 26.374120, lng: -80.103837}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot7d.setMap(map);
	
	var lot10 = new google.maps.Polygon({
		paths: [
			{lat: 26.372487, lng: -80.108915},
			{lat: 26.372487, lng: -80.108812},
			{lat: 26.372247, lng: -80.108812},
			{lat: 26.372247, lng: -80.108915}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot10.setMap(map);
	
	var lot12 = new google.maps.Polygon({
		paths: [
			{lat: 26.373888, lng: -80.110160},
			{lat: 26.373888, lng: -80.109929},
			{lat: 26.373802, lng: -80.109929},
			{lat: 26.373802, lng: -80.110160}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot12.setMap(map);		
	
	var lot13a = new google.maps.Polygon({
		paths: [
			{lat: 26.372784, lng: -80.111549},
			{lat: 26.372913, lng: -80.111440},
			{lat: 26.372835, lng: -80.111323},
			{lat: 26.372707, lng: -80.111438}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot13a.setMap(map);
	var lot13b = new google.maps.Polygon({
		paths: [
			{lat: 26.372306, lng: -80.110868},
			{lat: 26.372304, lng: -80.110564},
			{lat: 26.372226, lng: -80.110564},
			{lat: 26.372226, lng: -80.110756}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot13b.setMap(map);
	
	var lot15a = new google.maps.Polygon({
		paths: [
			{lat: 26.371466, lng: -80.109104},
			{lat: 26.371466, lng: -80.109012},
			{lat: 26.371291, lng: -80.109012},
			{lat: 26.371291, lng: -80.109104}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15a.setMap(map);
	var lot15b = new google.maps.Polygon({
		paths: [
			{lat: 26.370584, lng: -80.107931},
			{lat: 26.370359, lng: -80.107602},
			{lat: 26.370209, lng: -80.107719},
			{lat: 26.370440, lng: -80.108054}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot15b.setMap(map);
	
	var lot16a = new google.maps.Polygon({
		paths: [
			{lat: 26.369589, lng: -80.107053},
			{lat: 26.369589, lng: -80.106054},
			{lat: 26.369500, lng: -80.106054},
			{lat: 26.369500, lng: -80.107053}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16a.setMap(map);
	var lot16b = new google.maps.Polygon({
		paths: [
			{lat: 26.368620, lng: -80.105929},
			{lat: 26.368620, lng: -80.105694},
			{lat: 26.368440, lng: -80.105694},
			{lat: 26.368440, lng: -80.105929}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16b.setMap(map);
	var lot16c = new google.maps.Polygon({
		paths: [
			{lat: 26.368618, lng: -80.105515},
			{lat: 26.368618, lng: -80.105335},
			{lat: 26.368531, lng: -80.105335},
			{lat: 26.368531, lng: -80.105515}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot16c.setMap(map);
	
	var lot19a = new google.maps.Polygon({
		paths: [
			{lat: 26.371465, lng: -80.104513},
			{lat: 26.371465, lng: -80.104056},
			{lat: 26.371379, lng: -80.104056},
			{lat: 26.371379, lng: -80.104513}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19a.setMap(map);
	var lot19b = new google.maps.Polygon({
		paths: [
			{lat: 26.371023, lng: -80.104575},
			{lat: 26.371023, lng: -80.104466},
			{lat: 26.370941, lng: -80.104466},
			{lat: 26.370941, lng: -80.104575}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot19b.setMap(map);	
	
	var lot21 = new google.maps.Polygon({
		paths: [
			{lat: 26.367876, lng: -80.104729},
			{lat: 26.367876, lng: -80.104637},
			{lat: 26.367785, lng: -80.104637},
			{lat: 26.367785, lng: -80.104693},
			{lat: 26.367659, lng: -80.104693},
			{lat: 26.367659, lng: -80.104637},
			{lat: 26.367567, lng: -80.104637},
			{lat: 26.367567, lng: -80.104729}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot21.setMap(map);
	
	var lot22 = new google.maps.Polygon({
		paths: [
			{lat: 26.367934, lng: -80.103136},
			{lat: 26.367934, lng: -80.103042},
			{lat: 26.367593, lng: -80.103042},
			{lat: 26.367593, lng: -80.103136}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot22.setMap(map);
	
	var lot23 = new google.maps.Polygon({
		paths: [
			{lat: 26.368050, lng: -80.101627},
			{lat: 26.368050, lng: -80.101330},
			{lat: 26.367766, lng: -80.101330},
			{lat: 26.367766, lng: -80.101627}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot23.setMap(map);
	
	var lot30a = new google.maps.Polygon({
		paths: [
			{lat: 26.376587, lng: -80.097410},
			{lat: 26.376589, lng: -80.097357},
			{lat: 26.376509, lng: -80.097357},
			{lat: 26.376509, lng: -80.097410}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot30a.setMap(map);
	var lot30b = new google.maps.Polygon({
		paths: [
			{lat: 26.376340, lng: -80.095898},
			{lat: 26.376341, lng: -80.095779},
			{lat: 26.376260, lng: -80.095779},
			{lat: 26.376257, lng: -80.095898}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot30b.setMap(map);

	var lot35a = new google.maps.Polygon({
		paths: [
			{lat: 26.375422, lng: -80.097966},
			{lat: 26.375422, lng: -80.097876},
			{lat: 26.375217, lng: -80.097876},
			{lat: 26.375217, lng: -80.097966}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot35a.setMap(map);
	var lot35b = new google.maps.Polygon({
		paths: [
			{lat: 26.374796, lng: -80.097966},
			{lat: 26.374796, lng: -80.097876},
			{lat: 26.374636, lng: -80.097876},
			{lat: 26.374636, lng: -80.097966}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot35b.setMap(map);
	
	var lot36a = new google.maps.Polygon({
		paths: [
			{lat: 26.376112, lng: -80.099610},
			{lat: 26.376112, lng: -80.099466},
			{lat: 26.376058, lng: -80.099466},
			{lat: 26.376028, lng: -80.099505},
			{lat: 26.376028, lng: -80.099610}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot36a.setMap(map);
	var lot36b = new google.maps.Polygon({
		paths: [
			{lat: 26.374998, lng: -80.099731},
			{lat: 26.374998, lng: -80.099555},
			{lat: 26.374909, lng: -80.099555},
			{lat: 26.374909, lng: -80.099731}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot36b.setMap(map);
	
	var lot45 = new google.maps.Polygon({
		paths: [
			{lat: 26.378038, lng: -80.097684},
			{lat: 26.378038, lng: -80.097593},
			{lat: 26.377880, lng: -80.097591},
			{lat: 26.377880, lng: -80.097681}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot45.setMap(map);
	
	var lot49 = new google.maps.Polygon({
		paths: [
			{lat: 26.372330, lng: -80.107108},
			{lat: 26.372330, lng: -80.106987},
			{lat: 26.372253, lng: -80.106987},
			{lat: 26.372253, lng: -80.107108}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot49.setMap(map);
	
	var lot60a = new google.maps.Polygon({
		paths: [
			{lat: 26.370269, lng: -80.096593},
			{lat: 26.370288, lng: -80.096504},
			{lat: 26.370181, lng: -80.096472},
			{lat: 26.370161, lng: -80.096563}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot60a.setMap(map);
	var lot60b = new google.maps.Polygon({
		paths: [
			{lat: 26.369080, lng: -80.096513},
			{lat: 26.369071, lng: -80.096422},
			{lat: 26.368954, lng: -80.096434},
			{lat: 26.368962, lng: -80.096524}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot60b.setMap(map);
	var lot60c = new google.maps.Polygon({
		paths: [
			{lat: 26.368386, lng: -80.096561},
			{lat: 26.368379, lng: -80.096469},
			{lat: 26.368275, lng: -80.096477},
			{lat: 26.368284, lng: -80.096570}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot60c.setMap(map);
	var lot60d = new google.maps.Polygon({
		paths: [
			{lat: 26.367636, lng: -80.096618},
			{lat: 26.367629, lng: -80.096520},
			{lat: 26.367539, lng: -80.096529},
			{lat: 26.367546, lng: -80.096623}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot60d.setMap(map);
	var lot60e = new google.maps.Polygon({
		paths: [
			{lat: 26.367483, lng: -80.096626},
			{lat: 26.367454, lng: -80.096544},
			{lat: 26.367364, lng: -80.096583},
			{lat: 26.367393, lng: -80.096665}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot60e.setMap(map);
	var lot60f = new google.maps.Polygon({
		paths: [
			{lat: 26.367363, lng: -80.096364},
			{lat: 26.367331, lng: -80.096277},
			{lat: 26.367280, lng: -80.096301},
			{lat: 26.367312, lng: -80.096385}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot60f.setMap(map);
	
	var lot102 = new google.maps.Polygon({
		paths: [
			{lat: 26.367443, lng: -80.099651},
			{lat: 26.367442, lng: -80.099294},
			{lat: 26.367364, lng: -80.099294},
			{lat: 26.367366, lng: -80.099651}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lot102.setMap(map);
	
	var lotGarage1 = new google.maps.Polygon({
		paths: [
			{lat: 26.372001, lng: -80.105972},
			{lat: 26.372001, lng: -80.106097},
			{lat: 26.371896, lng: -80.106097},
			{lat: 26.371896, lng: -80.105972}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotGarage1.setMap(map);
	
	var lotGarage2 = new google.maps.Polygon({
		paths: [
			{lat: 26.369265, lng: -80.099602},
			{lat: 26.369265, lng: -80.099480},
			{lat: 26.369160, lng: -80.099480},
			{lat: 26.369160, lng: -80.099602}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotGarage2.setMap(map);
	
	var lotGarage3 = new google.maps.Polygon({
		paths: [
			{lat: 26.375273, lng: -80.104715},
			{lat: 26.375273, lng: -80.104613},
			{lat: 26.375163, lng: -80.104613},
			{lat: 26.375163, lng: -80.104713}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotGarage3.setMap(map);
	
	var lotPBPla = new google.maps.Polygon({
		paths: [
			{lat: 26.372317, lng: -80.101311},
			{lat: 26.372317, lng: -80.101122},
			{lat: 26.372231, lng: -80.101122},
			{lat: 26.372231, lng: -80.101311}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotPBPla.setMap(map);
	var lotPBPlb = new google.maps.Polygon({
		paths: [
			{lat: 26.371394, lng: -80.101399},
			{lat: 26.371394, lng: -80.101219},
			{lat: 26.371303, lng: -80.101219},
			{lat: 26.371303, lng: -80.101399}],
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'white',
		fillOpacity: 0.35 //This opacity will be to determine availability
	});
	lotPBPlb.setMap(map);
}