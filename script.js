$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(position)
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	
	
	
$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=8421ccdba1ed7d7315bbcdde0f687adf", function(json) {
			//gets weather information from open weather map
			var imageUrl; //initialize and set vars with values from open weather json	
	
	//This API enables cross-origin requests to anywhere.

/* Usage:

/               Shows help
/iscorsneeded   This is the only resource on this host which is served without CORS headers.
/<url>          Create a request to <url>, and includes CORS headers in the response.

If the protocol is omitted, it defaults to http (https if port 443 is specified).

Cookies are disabled and stripped from requests.

Redirects are automatically followed. For debugging purposes, each followed redirect results
in the addition of a X-CORS-Redirect-n header, where n starts at 1. These headers are not
accessible by the XMLHttpRequest API.
After 5 redirects, redirects are not followed any more. The redirect response is sent back
to the browser, which can choose to follow the redirect (handled automatically by the browser).

The requested URL is available in the X-Request-URL response header.
The final URL, after following all redirects, is available in the X-Final-URL response header.


To prevent the use of the proxy for casual browsing, the API requires either the Origin
or the X-Requested-With header to be set. To avoid unnecessary preflight (OPTIONS) requests,
it's recommended to not manually set these headers in your code.


Demo          :   https://robwu.nl/cors-anywhere.html
Source code   :   https://github.com/Rob--W/cors-anywhere/
Documentation :   https://github.com/Rob--W/cors-anywhere/#documentation --> */
	
	function(json) {
			//gets weather information from open weather map
			var imageUrl; //initialize and set vars with values from open weather json
			var temp = json.main.temp;
			var weather = json.weather[0].main;
			var loc = json.name;
			var icon = "<img src = 'http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
	s
	//display values on page
			$("#temp").html(temp);
			$("#description").html(weather);
			$("#loc").html(loc);
      $("#icon").html(icon);//
	
		jQuery.fn.extend({ // FC togg function
				toggleText: function(a, b) {
					var isClicked = false;
					var that = this;
	this.click(function() { //push to F and display
						if (isClicked) {a
							that.text(a);
							temp = json.main.temp;
							$("#temp").html(temp);
	
	
	