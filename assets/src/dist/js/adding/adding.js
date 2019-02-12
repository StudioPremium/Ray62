$(document).ready(function() {

	$('.js-adding').click(function(event) {

		var target = event.target; 

		// избранное
		if ( $(event.target).hasClass( 'js-adding_favorites' ) ) {

			//проверка на добавление
			if ( $(event.target).hasClass( 'js-adding_done' ) ) {

				$(event.target).removeClass( 'js-adding_done' );
				$(event.target).text( 'В избранное' );
				changeToast( '#toast', 'Токарный станок с ЧПУ HAAS SL20TE', 'Продукт удален из ', 'избранного', 'favorites.html' );
				showToast( '#toast' );
				
				$('#toast').on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
				});

			} else {

				$(event.target).addClass( 'js-adding_done' );
				$(event.target).text( 'В избранном' );
				changeToast( '#toast', 'Токарный станок с ЧПУ HAAS SL20TE', 'Продукт добавлен в ', 'избранное', 'favorites.html' );
				showToast( '#toast' );

				$( '#toast' ).on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
				});
			};

		};
		// сравнение 
		if ( $(event.target).hasClass( 'js-adding_comparison' ) ) {

			//проверка на добавление
			if ( $(event.target).hasClass( 'js-adding_done' ) ) {

				$(event.target).removeClass( 'js-adding_done' );
				$(event.target).text( 'Добавить к сравнению' );
				changeToast( '#toast', 'Токарный станок с ЧПУ HAAS SL20TE', 'Продукт удален из ', 'сравнения', 'comparison.html' );
				showToast( '#toast' );
				
				$('#toast').on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
				});

			} else {
				
				$(event.target).addClass( 'js-adding_done' );
				$(event.target).text( 'Удалить из сравнения' );
				changeToast( '#toast', 'Токарный станок с ЧПУ HAAS SL20TE', 'Продукт добавлен к ', 'сравнению', 'comparison.html' );
				showToast( '#toast' );

				$( '#toast' ).on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
				});
			};
		};
		// корзина
		if ( $(event.target).hasClass( 'js-adding_basket' ) ) {

			//проверка добавление
			if ( $(event.target).hasClass( 'js-adding_done' ) ) {

				$(event.target).removeClass( 'js-adding_done' );
				$(event.target).text( 'Добавить в корзину' );
				changeToast( '#toast', 'Токарный станок с ЧПУ HAAS SL20TE', 'Продукт удален из ', 'корзины', 'basket.html' );
				// количество добавленных товаров и их стоимость вписана для примера
				changeBasketHeader('4', '1 300 000');
				showToast( '#toast' );

				$( '#toast' ).on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
				});

			} else {
				$(event.target).addClass( 'js-adding_done' );
				$(event.target).text( 'Удалить из корзины' );
				changeToast( '#toast', 'Токарный станок с ЧПУ HAAS SL20TE', 'Продукт добавлен в ', 'корзину', 'basket.html' );
				showToast( '#toast' );
				changeBasketHeader('5', '1 700 000');

				$( '#toast' ).on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
				});
			};

		};
		
	});

});


function showToast(selector) {
	$(selector).toast('show');
}

function changeToast(selector, title, text, linktext, link) {
	$(selector).find('.toast__title').text(title);
	$(selector).find('.toast__text').text(text);
	$(selector).find('.toast__link').text(linktext);
	$(selector).find('.toast__link').prop("href", link);
};

function changeBasketHeader(quantity, sum) {
	$('#basket-header__quantity').text(quantity);
	$('#basket-header__sum').text(sum);
}