// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap',function(){navigator.vibrate(1000);});//tap a btnvibrar	
$('#btnbeep').on('tap', function(){navigator.notification.beep(1)});
$('#izquierda').on('swipeleft', function(){alert("Barrio a la izquierda");});//swip izquierda
$('#derecha').on('swiperight', function(){alert("Barrio a la derecha");});//swip derecha
document.addEventListener("pause", function(){
	$('#listado').append("<p> La aplicacion se pauso </p>");
	});
document.addEventListener("resume", function(){
	$('#listado').append("<p>Se reinicio la aplicacion </p>");
	});	
$(window).on('orientationchange', function(e){
	$('#listado').append("<p>Orientacion: " + e.orientation + "</p>");
	});
}); 
});

