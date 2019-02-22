$(document).ready(function() {
    
    $('.form_order').submit(function(e) {
        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();
        var submit = $("[type=submit]",this);
        var width =  $("[type=submit]",this).css("width");
        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классов .not_error равно 2(так как у нас всего 2 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату
        $.ajax({
                url: 'dist/server/order.php',
                type: 'post',
                data: $(this).serialize(),
                dataType: 'text',
                beforeSend: function(xhr, textStatus) {
                    $('.form_order input').attr('disabled', 'disabled');
                    submit.css("justify-content", "center");
                    submit.html("");
                    submit.css('min-width' , ''+width+'')
                    $( '<img class="preloader" src="dist/img/preloader.svg" alt="preloader">' ).appendTo( submit );
                },
                success: function(response) {
                    $('.form_order input').removeAttr('disabled');
                    $('.form_order input, textarea').val('').removeClass('not_error').next('.error-box').text('');
                    submit.html("");
                    submit.html("Отправлено");
                    submit.prop('disabled', true);
                }
        }); 
        // Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме


    }); 
    
});