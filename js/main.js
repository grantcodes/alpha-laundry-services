console.log("javascript");
$(function() {
  $("a[href^=#]").click(function(event) {
    var location = window.location,
      hash = $(this).attr("href");
    $("html, body")
      .stop()
      .animate({ scrollTop: $(hash).offset().top }, 1000, function() {
        window.location = location.pathname + location.search + hash;
      });
    event.preventDefault();
  });

  var hash = window.location.hash;
  if (!!hash) {
    $("a[href=" + hash + "]").click();
  }
});

var map = L.map("map", {
  scrollWheelZoom: false,
  dragging: true,
  attributionControl: false,
  zoomControl: true
}).setView([55.8513, -4.4896], 14);

console.log("map", map);
// L.control.zoom({position: 'bottomLeft'}).addTo(map);

L.tileLayer("http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png", {
  maxZoom: 18
}).addTo(map);

var marker = L.marker([55.8513, -4.4896])
  .addTo(map)
  .bindPopup(
    '<p><a href="https://maps.google.co.uk/maps?saddr=Current+Location&daddr=Alpha+Laundry+Services,+Unit+16,+Mossedge+Industrial+Estate,+Linwood,+Renfrewshire+PA3+3HR">Get Directions</a></p>'
  )
  .openPopup();

// $('#form').attr('type', 'get');

// $('#form').submit( function (e) {
//   e.preventDefault();
//   var success = $.get('email.php?'+ $(this).serialize());
//   $.ajax({
//     type: "GET",
//     url: "email.php",
//     data: $('#form').serialize(),
//     success: function (data) {
//       var container = $('#form').parent();
//       var message = '<p class="success-message right">Thank you for getting in touch.</p>';
//       $('#form').fadeOut();
//       $(message).hide().appendTo(container).fadeIn();
//     },
//     error: function () {
//       var container = $('#form').parent();
//       var message = '<p class="error-message right">The message failed to send. Please try emailing <a href="mailto:info@alphalaundryservices.com>info@alphalaundryservices.com</a> instead.</p>';
//       $('#form').fadeOut();
//       $(message).hide().appendTo(container).fadeIn();
//     }
//   });
//   // console.log(success);
// });

var stick_nav = function(viewport_height, nav_height) {
  var y = $(this).scrollTop();
  if (y >= viewport_height - nav_height) {
    $("nav").addClass("fixed");
  } else {
    $("nav").removeClass("fixed");
  }
};

var sticky_nav = function() {
  var viewport_height = $(window).height();
  var nav_height = $("nav").height();
  $(window).scroll(function() {
    stick_nav(viewport_height, nav_height);
  });
  stick_nav(viewport_height, nav_height);
};

sticky_nav();
window.onresize = sticky_nav;

// Parallax
$(window).scroll(function(e) {
  var y = $(this).scrollTop() / 3;
  var header = $("header").first();
  header.css("background-position", "50% +" + y + "px");
});
