$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(position)
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;