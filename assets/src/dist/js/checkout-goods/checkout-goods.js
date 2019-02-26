$(document).ready(function() {
	$('.js-checkout-goods-delete').click(function() {

		var goodsID = $( this ).closest( '[data-product-id]' ).data( 'data-product-id' );
		var goodsContainer = $( this ).closest( '[data-product-id]' );
		var width =  $( this ).css("width");

		$.ajax({

			beforeSend: $.proxy(function() {

				$( this ).css('min-width' , ''+width+'');
				$( this ).text("");
	            $( '<img class="preloader" src="dist/img/preloader-circular.svg" alt="preloader">' ).appendTo( $( this ) );

	        }, this),

		    type: 'POST', 
		    url: 'dist/server/checkout-goods.php', 
		    data: {
		        "goodsID": goodsID, // id товара
		    },
		    dataType: 'json',

		    success: $.proxy(function( data ){

		    	var title = data.title;
	            var text = data.text;
	            var linktext = data.linktext;
	            var link = data.link;

            	changeToast( '#toast', title, text, linktext, link );
            	showToast( '#toast' );
		    	deleteGoodsOutCheckout( goodsContainer );
		    	
	  		}, this),

	  		error: function( text ){

            	alert('Ошибка при отправке данных на сервер');

        	}
		});

	});

	function deleteGoodsOutCheckout( goods ) {

		$( goods ).animate({

		    opacity: 0,
		    visibility: 'hidden'

		  }, 700, function() {

		  	deleteContainer( goods );

		  	var productQuantity = checkForQuantity( '[data-product-id]' );

		  	if (productQuantity == 0) {

		  		 emptyCheckoutGoods();
		  	}
		  });
	};

	function checkForQuantity( selector ) {
		return $( selector ).length;
	};
	function deleteContainer(container) {
		$( container ).remove();
	};
	function emptyCheckoutGoods() {
		deleteContainer( '#formCheckout' );
		$('#checkout-container').append('<h2 class="text-center mb-5">Корзина пуста</h2>');
	}
});