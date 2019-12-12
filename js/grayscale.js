/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        //center: new google.maps.LatLng(50.174057, 8.631437), // Riedberg
		center: new google.maps.LatLng(50.926146, 6.932558), // Köln thp

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(50.925798,6.932824);
    var myMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}



var onReCaptchaLoad = function() {
	    grecaptcha.render('captchadiv', {
          'sitekey' : '6LdHJRITAAAAADVp_gLXthiWDg5YyOsl3ZT4LwFm',
          'callback' : verifyCallback,
          'theme' : 'light'
        });
};

// This is worth nothing as long as the response isn't validated by the server and the mail is given after verification.
var verifyCallback = function(response) {
		if(response.length == 0)
		{
			document.getElementById('captcharesult').innerHTML="Hi Robot :)";
			return false;
		}
		 if(response.length != 0)
		 {
			 str="";
			if(document.getElementById("pri").checked == true){
				str="<a href='mailto:mail@carstenbauer.eu'>mail@carstenbauer.eu</a>";
			}
			else if(document.getElementById("wor").checked == true) {
				str="<a href='mailto:bauer@thp.uni-koeln.de'>bauer@thp.uni-koeln.de</a>";
			}
			else {
				str="<a href='mailto:mail@carstenbauer.eu'>mail@carstenbauer.eu</a>";
			}
			document.getElementById('captcharesult').innerHTML="<p class='text-center'>"+str+"<br><br>I'm looking forward to hearing from you!</p>";	
			return true; 
		 }
};

$("#popsdw").on("click", function() {
   $('#imagepreview').attr('src', "img/sdw_figures.png" ); //$('#imageresource').attr('src') here asign the image to the modal when the user click the enlarge link
   document.getElementById("myModalLabel").textContent="Hierarchy of energy scales in an O(3) symmetric antiferromagnetic quantum critical metal: a Monte Carlo study"
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#popqlt").on("click", function() {
   $('#imagepreview').attr('src', "img/qlt_figures.png" ); //$('#imageresource').attr('src') here asign the image to the modal when the user click the enlarge link
   document.getElementById("myModalLabel").textContent="Probing transport in quantum many-fermion simulations via quantum loop topography" //$('#imageresource').attr('src') here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("#pop2").on("click", function() {
   $('#imagepreview').attr('src', "img/graphene_figures.png" ); //$('#imageresource').attr('src') here asign the image to the modal when the user click the enlarge link
   document.getElementById("myModalLabel").textContent="Quasiparticle velocity renormalization in graphene" //$('#imageresource').attr('src') here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});