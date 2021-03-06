// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require activestorage
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require graphql
//= require vendor/redux-v4
//= require react
//= require react_ujs
//= require components
//= require_tree .

$( document ).on('turbolinks:load', function() {
  $('#notice').delay(3000).fadeOut(1000);
  $('#success').delay(3000).fadeOut(1000);
  $('#warning').delay(3000).fadeOut(1000);
  tinymce.remove();
  tinymce.init({ 
  	selector:'textarea#product_description',
  	plugins: "lists"
  });
  
  // activate the elevateZoom plugin
  $('.img-zoom').elevateZoom();

});

function animate(element, classTitle){
  $(element).addClass(classTitle);
  var wait = setTimeout(function() {
    $(element).removeClass(classTitle);
  }, 1000);
}

