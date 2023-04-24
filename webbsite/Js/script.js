function castParallax() {
  var opThresh = 350;
  var opFactor = 750;

  window.addEventListener("scroll", function (event) {
    var top = this.pageYOffset;

    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("data-speed");
      var yPos = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + yPos + "px, 0px)"
      );
    }
  });
}

document.body.onload = castParallax();

// Go back function
let go_back = document.getElementById("go-back");

go_back.addEventListener("click", () => {
  history.back();
});
