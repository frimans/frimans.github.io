
function castParallax() {

	var opThresh = 350;
	var opFactor = 750;
	var width = window.screen.width;


	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
    // Set different speeds for each parallax layer
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			console.log(width);
			if(width >= 600){speed = layer.getAttribute('data-speed');}
			else {
				speed = "100"
			}

			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

document.body.onload = castParallax();
