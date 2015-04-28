// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap',function(){navigator.vibrate(1000);});//tap a btnvibrar	
$('#btnbeep').on('tap', function(){navigator.beep(1);});
$('#izquierda').on('swipeleft', function(){alert("Barrio a la izquierda");});//swip izquierda
$('#derecha').on('swiperight', function(){alert("Barrio a la derecha");});//swip derecha
}); 
});

