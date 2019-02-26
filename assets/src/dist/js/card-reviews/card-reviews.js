$(document).ready(function() {

	$( '.js-reviews-read-more' ).click(function() {
		var reviewsID =  $( this ).closest( '[data-reviews-id]' ).data( 'reviews-id' );
		var reviewsTextContainer = $( this ).closest( '[data-reviews-id]' ).find( '.js-reviews-text' );
		var reviewsText;

		$.ajax({
			beforeSend: $.proxy(function() {

				$( this ).text("");
	            $( '<img class="preloader" src="dist/img/preloader.svg" alt="preloader">' ).appendTo( $( this ) );

	        }, this),
		    type: 'POST', 
		    url: 'dist/server/reviews.php', 
		    data: {
		        "reviewsID": reviewsID, // id отзыва
		    },
		    dataType: 'text',
		    success: $.proxy(function(text){

		       	reviewsText = text;

		        $( reviewsTextContainer ).text( reviewsText );
		        $( this ).html("");
		        $( this ).hide();

	  		}, this),
	  		error: function( text ){

            	alert('Ошибка при отправке данных на сервер');

        	}
		});
	});

	$( '.js-reviews-btn-reply' ).click(function() {
		$( this ).closest( '.card__content' ).find( '.card__form_reviews' ).show();
		$( this ).hide();

	});

	$(".js-reviews-send-feedback textarea").keydown(function(e) {

		if ( $( this ).val().length >= 5 ) {

			$( this ).closest('form').find(':submit').prop('disabled', false);

		} else {

			$( this ).closest('form').find(':submit').prop('disabled', true);

		};

	});

	$('.js-reviews-send-feedback').submit(function(e) {
		e.preventDefault();

        var submit = $("[type=submit]",this);
        var width =  $("[type=submit]",this).css("width");

        $.ajax({
        	beforeSend: $.proxy(function() {
        		$( this ).find('textarea').prop('disabled', true);
                submit.prop('disabled', true);
                submit.html("");
                submit.css('min-width' , ''+width+'');
                $( '<img class="preloader" src="dist/img/preloader.svg" alt="preloader">' ).appendTo( submit );
            }, this),
            url: 'dist/server/reviews-feedback.php',
            type: 'post',
            data: $(this).serialize(),
            dataType: 'text',
            success: $.proxy(function() {
                $( this ).find('textarea').prop('disabled', true);
                submit.html("");
                submit.css('min-width' , 'none');
                submit.html("Отправлено");
                submit.prop('disabled', true);
            }, this),
            error: function( data ){
            	alert('Ошибка при отправке данных на сервер');
        	}
        }); 
	});

});