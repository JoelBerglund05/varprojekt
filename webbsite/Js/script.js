function cast_parallax() {
  window.addEventListener("scroll", function () {
    var top = this.scrollY;

    var layers = document.getElementsByClassName("parallax");
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("data-speed");
      var y_position = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + y_position + "px, 0px)"
      );
    }
  });
}

document.body.onload = cast_parallax();

// Go back function
let go_back = document.getElementById("go-back");

go_back.addEventListener("click", () => {
  console.log(document.referrer);

  if (document.referrer == "<empty string>") {
    console.log("tjo");
  } else {
    history.back();
  }
});
