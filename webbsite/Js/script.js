function cast_parallax() {
  window.addEventListener("scroll", function () {
    var top = this.scrollY;

    const layer_list = document.getElementsByClassName("parallax");
    // Calculates the positioning of each layer
    for (var i = 0; i < layer_list.length; i++) {
      layer = layer_list[i];
      speed = layer.getAttribute("data-speed");
      var y_position = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + y_position + "px, 0px);"
      );
    }
  });
}

document.body.onload = cast_parallax();

function set_darkmode() {
  if (
    "0" ==
    (document.cookie.match(/^(?:.*;)?\s*Theme\s*=\s*([^;]+)(?:.*)?$/) || [
      ,
      null,
    ])[1]
  ) {
    let oldlink = document.getElementsByTagName("link").item(1);

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "css/bootstraps.min(dark).css");

    document
      .getElementsByTagName("head")
      .item(1)
      .replaceChild(newlink, oldlink);
  } else {
    document.cookie = "Theme=1;";
  }
}
