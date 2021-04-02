$(document).ready(function(){

$(".btn-menu-button").click(function () {
		$('.header-right').addClass('active');
	})
	$(".btn-menu-button-close").click(function () {

		$('.header-right').removeClass('active');
	})
	$('#signup').click(function () {
		$('.modal-mask').addClass('show');
	})
	$('.popup-close').click(function () {
		$('.modal-mask').removeClass('show');
	})
});	