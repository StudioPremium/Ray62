$(document).ready(function() {

	// маска на телефон
    $('[type="tel"]').mask("+7 (999) 999-99-99");

    // функция давление в кеш браузера прелоудера
    function preloadImages(array) {
	    if (!preloadImages.list) {
	        preloadImages.list = [];
	    }
	    var list = preloadImages.list;
	    for (var i = 0; i < array.length; i++) {
	        var img = new Image();
	        img.onload = function() {
	            var index = list.indexOf(this);
	            if (index !== -1) {
	                list.splice(index, 1);
	            }
	        }
	        list.push(img);
	        img.src = array[i];
	    }
	}

	preloadImages(["dist/img/preloader.svg", "dist/img/preloader-circular.svg"]);
});


// Импортируем хедер
//= header/header.js

// Импортируем мобильное меню
//= mobile-menu/mobile-menu.js

// Импортируем поведение тостов
//= toast/toast.js

// Импортируем добавление товара
//= goods/goods.js

// Импортируем заказ в 1 клик
//= order-one-click/order-one-click.js

// Импортируем поведение форм
//= form/form.js

// Импортируем поведение форм
//= valid-money/valid-money.js

// Импортируем слайдер от jquery-ui
//= slider-ui/slider-ui.js

// Смена вариантов показа
//= view-switcher/view-switcher.js

// Отзывы
//= card-reviews/card-reviews.js

// Заказ товара
//= checkout-goods/checkout-goods.js