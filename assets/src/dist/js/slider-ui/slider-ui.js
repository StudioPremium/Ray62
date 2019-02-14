$(document).ready(function() {
    $(function() {

        var priceMin = $('.js-filter_price_min').data('val-min');
        var priceMax = $('.js-filter_price_max').data('val-max');
        var priceMinValue = $('.js-filter_price_min').val();
        var priceMaxValue = $('.js-filter_price_max').val();

        priceMinValue = +priceMinValue;
        priceMaxValue = +priceMaxValue;
        priceMin = +priceMin;
        priceMax = +priceMax;

        $("#slider_price").slider({
            range: true,
            min: priceMin,
            max: priceMax,
            values: [priceMinValue, priceMaxValue],
            slide: function(event, ui) {
                $('.js-filter_price_min').val(ui.values[0].toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
                $('.js-filter_price_max').val(ui.values[1].toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
            }
        });

        $('.js-filter_price_min, .js-filter_price_max').validMoney();

        $('.js-filter_price_min').val($("#slider_price").slider("values", 0).toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
        $('.js-filter_price_max').val($("#slider_price").slider("values", 1).toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));

        $('.js-filter_price_min').keyup(function() {

            var inputValidMin = $(this).val();

            inputValidMin = inputValidMin.replace(/[^0-9]/g, '');
            inputValidMin = +inputValidMin;
            $("#slider_price").slider('values', 0, inputValidMin);

        });

        $('.js-filter_price_max').keyup(function() {

            var inputValidMax = $(this).val();
            
            inputValidMax = inputValidMax.replace(/[^0-9]/g, '');
            inputValidMax = +inputValidMax;
            $("#slider_price").slider('values', 1, inputValidMax);

        });

    });
});