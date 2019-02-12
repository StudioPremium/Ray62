$(document).ready(function() {
	$(function() {

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('#mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
	 		transfer('#enter-box', '#mobile-menu__enter-box');
	 		transfer('#header-search', '#mobile-menu__search');
	 		transfer('#header__advertise', '#mobile-menu__advertise');
	 		transferChild('#header-categories', '#mobile-menu-categories__list');
	 		transferChild('#header__navigation', '#mobile-menu-nav');
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('#mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
	    	setTimeout(function () {
				transfer('#enter-box', '#enter-box_header-cont');
		    	transfer('#header__advertise', '#advertise_header-cont');
		    	transfer('#header-search', '#search_header-cont');
		    	transferChild('#mobile-menu-categories__list', '#header-categories');
		    	transferChild('#mobile-menu-nav', '#header__navigation');
			}, 500); 
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500); 
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};

		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500); 
		};

		/*
			функция переноса объекта в контейнер.
			box - селектор объекта, который нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки
		*/

		function transfer(box, container) {
			$(container).append($(box));
		};
		/*
			функция переноса детей объекта в контейнер.
			box - селектор объекта, детей которого нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки.

		*/
		function transferChild(box, container) {
			$(container).append($(box).children());
		};
	 	
	});
});
