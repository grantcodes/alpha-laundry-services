//= require_tree .

$(function () {
  $('a[href^=#]').click(function( event ) {
    var location = window.location,
    hash = $(this).attr('href')
    ;
    $('html, body')
    .stop()
    .animate({scrollTop: $(hash).offset().top}, 800, function () {
      window.location = location.pathname + location.search + hash;
    })
    ;
    event.preventDefault();
  });

  var hash = window.location.hash;
  if (!!hash) {
    $('a[href=' + hash + ']').click();
  }
});

var map = L.map('contact', {
  scrollWheelZoom: false,
  dragging: false,
  attributionControl: false,
  zoomControl: false
}).setView([55.8513, -4.4896], 13);

// L.control.zoom({position: 'bottomLeft'}).addTo(map);

L.tileLayer('http://{s}.tile.cloudmade.com/ac08d200814142dfae0f8cedd7996d40/997/256/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

var marker = L.marker([55.8513, -4.4896]).addTo(map);

// $('#form').attr('type', 'get');

$('#form').submit( function (e) {
  e.preventDefault();
  var success = $.get('email.php?'+ $(this).serialize());
  $.ajax({
    type: "GET",
    url: "email.php",
    data: $('#form').serialize(),
    success: function (data) {
      var container = $('#form').parent();
      var message = '<p class="success-message">Thank you for getting in touch.</p>';
      $('#form').fadeOut();
      $(message).hide().appendTo(container).fadeIn();
    },
    error: function () {
      var container = $('#form').parent();
      var message = '<p class="error-message">The message failed to send. Please try emailing <a href="mailto:info@alphalaundryservices.com>info@alphalaundryservices.com</a> instead.</p>';
      $('#form').fadeOut();
      $(message).hide().appendTo(container).fadeIn();
    }
  });
  // console.log(success);
});