const postData2 = {
  lat: 43.6649036,
  lon: -70.251841,
  course: 285,
  alt: 10,
  speed: 45,
  accuracy: 1.7,
  is_active: true,
};
const postData3 = {
	lat: 43.6601670, 
	lon: -70.250193,
	course: 285,
	alt: 10,
	speed: 45,
	accuracy: 1.7000,
	is_active: true
};
const postData4 = {
	lat: 43.6536014, 
	lon: -70.2714461,
	course: 285,
	alt: 10,
	speed: 45,
	accuracy: 1.7000,
	is_active: false
};
const postData5 = {
  "lat": 43.6587076, 
	"lon": -70.2948433,
	"course": 265,
	"alt": 10,
	"speed": 45,
	"accuracy": 1.7000,
	"is_active": true
};

const postData6 = {
	"lat": 43.6839063, 
	"lon": -70.2912289,
	"course": 165,
	"alt": 10,
	"speed": 45,
	"accuracy": 1.7000,
	"is_active": true
};
const postData7 = {
	"lat": 43.706159, 
	"lon": -70.2412019,
	"course": 359,
	"alt": 10,
	"speed": 45,
	"accuracy": 1.7000,
	"is_active": false
};
const postData8 = {
	"lat": 43.6565559, 
	"lon": -70.1981014,
	"course": 170,
	"alt": 10,
	"speed": 45,
	"accuracy": 1.7000,
	"is_active": false
};
const postData9 = {
	"lat": 43.699096,
	"lon": -70.288641,
	"course": 12,
	"alt": 10,
	"speed": 45,
	"accuracy": 1.7000,
	"is_active": true
};
const postData10 = {
	"lat": 43.679765,
	"lon": -70.272168,
	"course": 245,
	"alt": 10,
	"speed": 45,
	"accuracy": 1.7000,
	"is_active": true
};
const postData11 = {
	"lat": 43.665026,
	"lon": -70.251905,
	"altitude": "100",
	"type": "emergency",
	"things": ["test_thing_2"]
};
const postData12 = {
	"lat": 43.660199,
	"lon": -70.250112,
	"altitude": "100",
	"type": "emergency",
	"things": ["test_thing_3"]
};

const postData13 = {
  "type": "police",
  "subtype": "patrol",
  "name": "test_thing_10",
  "registry_number": "test-reg",
  "vin_number": "JM1CW2BL1D0160781",
  "license_plate_number": "test-plate",
  "in_service": true,
  "is_publicly_alerting": false,
  "is_r2r_enabled": false
};

module.exports = {
  // Other project-wide configurations can be added here
  postData2, postData3, postData4, postData5, postData6, postData7, 
  postData8, postData9, postData10, postData11, postData12, postData13
};
