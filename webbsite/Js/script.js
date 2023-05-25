function cast_parallax() {
  window.addEventListener("scroll", function () {
    let top = this.scrollY;

    const layer_list = document.getElementsByClassName("parallax");
    // Detta används för lagerpositionerna.
    for (let i = 0; i < layer_list.length; i++) {
      layer = layer_list[i];
      speed = layer.getAttribute("data-speed");
      let y_position = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + y_position + "px, 0px);"
      );
    }
  });
}

document.body.onload = cast_parallax();
