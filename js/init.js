document.addEventListener("DOMContentLoaded", function() {
	// init gallery module
	HesGallery.init({
		wrapAround: true,
		hostedStyles: false
	});

	var osMap = document.getElementById('location_map');
	var mapBox = document.getElementsByClassName("location");

	//enable interactive map on click
	if (mapBox.length > 0) {
		mapBox[0].onclick = function(){
		     osMap.style.pointerEvents = "auto";
		};
	};

	//disable interactivity in map on scroll away
	osMap.addEventListener("mouseout", function(){
		osMap.style.pointerEvents = "none";
	});

});