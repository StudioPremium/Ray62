$(document).ready(function() {

	$('.js-goods').click(function(event) {

		var target = event.target; 
		var titleToast, textToast, linktextToast, linkToast, idGoods, pathInteraction, typeInteraction;
		idGoods = $(this).closest('[data-product-id]').data('product-id');
		// избранное
		if ( $(event.target ).hasClass( 'js-goods_favorites' ) ) {

			//проверка на добавление
			if ( $(event.target ).hasClass( 'js-goods_done' ) ) {
				deleteGoods( 'favorites', idGoods, event.target);

			} else {
				addGoods( 'favorites', idGoods, event.target);
			};

		};

		// сравнение 
		if ( $(event.target ).hasClass( 'js-goods_comparison' ) ) {

			//проверка на добавление
			if ( $(event.target ).hasClass( 'js-goods_done' ) ) {
				deleteGoods( 'comparison', idGoods, event.target);

			} else {
				addGoods( 'comparison', idGoods, event.target);

			};

		};
		// корзина
		if ( $( event.target ).hasClass( 'js-goods_basket' ) ) {

			//проверка добавление
			if ( $( event.target ).hasClass( 'js-goods_done' ) ) {
				deleteGoods( 'basket', idGoods, event.target);

			} else {
				addGoods( 'basket', idGoods, event.target);
			};

		};
		
	});

});


function showToast( selector ) {
	$( selector ).toast( 'show' );
}

function changeToast( selector, title, text, linktext, link ) {
	$( selector).find('.toast__title').text( title );
	$( selector).find('.toast__text').text( text );
	$( selector).find('.toast__link').text( linktext );
	$( selector).find('.toast__link').prop( "href", link );
};

function changeBasketHeader( quantity, sum ) {
	$( '#basket-header__quantity' ).text( quantity );
	$( '#basket-header__sum' ).text( sum );
}

function addGoods( typeButton, idGoods, eventTarget) {

	//корзина
	if ( typeButton == 'basket' ) {
		pathInteraction = 'basket';
		typeInteraction = 'add';
		var textSuccess = 'В корзине';

		sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods);

	};

	//избранное
	if ( typeButton == 'favorites' ) {

		pathInteraction = 'favorites';
		typeInteraction = 'add';
		var textSuccess = 'В избранном';

		sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods);
        
	};

	//сравнение
	if ( typeButton == 'comparison' ) {

		pathInteraction = 'comparison';
		typeInteraction = 'add';
		var textSuccess = 'Удалить из сравнения';

		sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods);
	};

};

function deleteGoods( typeButton, idGoods, eventTarget) {

	//корзина
	if ( typeButton == 'basket' ) {
		pathInteraction = 'basket';
		typeInteraction = 'delete';
		var textSuccess = 'Добавить в корзину';

		sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods);

	};

	//избранное
	if ( typeButton == 'favorites' ) {

		pathInteraction = 'favorites';
		typeInteraction = 'delete';
		var textSuccess = 'В избранное';

		sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods);
        
	};

	//сравнение
	if ( typeButton == 'comparison' ) {

		pathInteraction = 'comparison';
		typeInteraction = 'delete';
		var textSuccess = 'Добавить к сравнению';

		sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods);
	};

};

function showPreloader( eventTarget ) {
   	$( eventTarget ).text("");
    $( '<img class="preloader" src="dist/img/preloader.svg" alt="preloader">' ).appendTo( $( eventTarget ) );
};

function hidePreloader( eventTarget ) {
	$( eventTarget ).empty();
}

function sendingGoods(eventTarget, pathInteraction, typeInteraction, textSuccess, idGoods) {
	$.ajax({
        beforeSend: function() {
            showPreloader( eventTarget );
        },
        type: 'POST', 
        url: 'dist/server/goodsInteraction.php', 
        data: {
            "idGoods": idGoods, // id товара
            "typeAdd": pathInteraction, // путь отправки (в избранное, в сравнение или корзину)
            "typeInteraction": typeInteraction // тип взаимодействия (добавление)
        },
        dataType: 'json',
        success: $.proxy(function( data ) {
        	console.log(data);
       		var title = data.title;
            var text = data.text;
            var linktext = data.linktext;
            var link = data.link;
            var quantityGoodsInBasket = data.quantity;
            var sumInBasket = data.sum;

            if ( $( eventTarget ).hasClass( 'js-goods_done' ) ) {
               	$( eventTarget ).removeClass( 'js-goods_done' );

            } else {
                $( eventTarget ).addClass( 'js-goods_done' );
            };

            hidePreloader( eventTarget )
            $( eventTarget ).text( textSuccess );
            changeToast( '#toast', title, text, linktext, link );
            changeBasketHeader(quantityGoodsInBasket, sumInBasket);
            showToast( '#toast' );

            $( '#toast' ).on('hidden.bs.toast', function () {
					changeToast( '#toast', '', '', '', '' );
			});

        }, eventTarget),
        error: function( data ){
            alert('Ошибка при отправке данных на сервер');
        }
    });
}