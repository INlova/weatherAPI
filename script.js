/*global $*/
/*global jquery*/
$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(function(position) { // location call  
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=8421ccdba1ed7d7315bbcdde0f687adf", function(json) {
			//gets weather information from open weather map
			var imageUrl; //initialize and set vars with values from open weather json
			var temp = json.main.temp;
			var weather = json.weather[0].main;
			var loc = json.name;
			var icon = "<img src = 'https://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>";
      
			//display values on page
			$("#temp").html(temp);
			$("#description").html(weather);
			$("#loc").html(loc);
      $("#icon").html(icon);//add icon

			jQuery.fn.extend({ // FC togg function
				toggleText: function(a, b) {
					var isClicked = false;
					var that = this;
					this.click(function() { //push to F and display
						if (isClicked) {a
							that.text(a);
							temp = json.main.temp;
							$("#temp").html(temp);
						
							isClicked = false;
						} else { //sets value to C and displays on page 
							that.text(b);
							isClicked = true;
							temp = convertToCelsius(temp);
							$("#temp").html(temp);
						}
					});
					return this;
				}
			});
			$('#tempScale').toggleText(String.fromCharCode(176) + 'F', String.fromCharCode(176) + 'C');
			//setting background image depending on temp and conditions
			if (temp < 40) { //cold, snow map
				imageUrl = "https://static2.cs-bg.net/maps/images/screenshots/maps16/gg/cs-2457-gg_iceworld_x.jpg";
				setBackground(imageUrl);
			} else if (weather === "Rain") { // rain map
				imageUrl = "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-249-de_aztec.jpg";
				setBackground(imageUrl);
			} else if (temp > 75 && temp < 85) { // trop map
				imageUrl = "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-60-de_dust2_long-2.jpg";
				setBackground(imageUrl);
			} else if (temp >= 90) { // desert map
				imageUrl = "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-60-de_dust2_long-2.jpg";
				setBackground(imageUrl);
			} else { // default - placeholder map
				imageUrl = "https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/88/122/87761766.jpg"
				setBackground(imageUrl);
		  }

    });    
}); 
});

function setBackground(imageUrl) { //pushes bg image to background
  $('.bk').css('background-image','url("'+imageUrl+'")');
}

function convertToCelsius(temp) { //converts F temp to C
   return (Math.round( ((temp-32)*.5556) * 10 ) / 10);
}
// icon  req added inline


	
	//This API enables cross-origin requests to anywhere. IMPORTANT!

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
