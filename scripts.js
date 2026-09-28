$(window).on("load", function () {

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  // ---------- INIT ----------
  function init() {
    body.removeClass("view-2D opening")
        .addClass("view-3D zoom-large");

    setTimeout(function () {
      body.removeClass("hide-UI")
          .addClass("set-speed");
    }, 2000);
  }

  function setView(view) {
    universe.removeClass().addClass(view);
  }

  // ---------- TOGGLES ----------
  $("#toggle-data").on("click", function (e) {
    e.preventDefault();
    body.toggleClass("data-open data-close");
  });

  $("#toggle-controls").on("click", function (e) {
    e.preventDefault();
    body.toggleClass("controls-open controls-close");
  });

  $("#data a").on("click", function (e) {
    e.preventDefault();
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $("#data a").removeClass("active");
    $(this).addClass("active");
  });

  // 2D / 3D Toggle
  $(".set-view").on("click", function () {
    if (body.hasClass("view-3D")) {
      body.removeClass("view-3D").addClass("view-2D");
    } else {
      body.removeClass("view-2D").addClass("view-3D");
    }
  });

  // Zoom Toggle
  $(".set-zoom").on("click", function () {
    if (body.hasClass("zoom-large")) {
      body.removeClass("zoom-large").addClass("zoom-close");
    } else {
      body.removeClass("zoom-close").addClass("zoom-large");
    }
  });

  // Scale Modes
  $(".set-speed").on("click", function () {
    setView("scale-stretched set-speed");
  });

  $(".set-size").on("click", function () {
    setView("scale-s set-size");
  });

  $(".set-distance").on("click", function () {
    setView("scale-d set-distance");
  });

  // Start
  init();

});