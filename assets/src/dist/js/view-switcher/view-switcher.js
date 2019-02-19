$(document).ready(function() {

	$('.view-switcher__item').click(function() {
  		if ( $(this).hasClass('active') ) {
  			return false;
  		} else {
  			$(this).closest('.view-switcher').find('.view-switcher__item').removeClass('active');
  			$(this).addClass('active');
  		};
  		if ( $(this).hasClass('view-switcher__item_type_list') ) {
  			switchList();
  		};
  		if ( $(this).hasClass('view-switcher__item_type_grid') ) {
  			switchGrid();
  		};
	});

	function switchList() {
		$( '.snippet-list' ).removeClass( 'snippet-list_type_grid' );
		$( '.snippet-list' ).addClass( 'snippet-list_type_vertical' );
		$( '.snippet-card' ).removeClass( 'snippet-card_type_cell' );
	};
	function switchGrid() {
		$( '.snippet-list' ).removeClass( 'snippet-list_type_vertical' );
		$( '.snippet-list' ).addClass( 'snippet-list_type_grid' );
		$( '.snippet-card' ).addClass( 'snippet-card_type_cell' );
	}
});