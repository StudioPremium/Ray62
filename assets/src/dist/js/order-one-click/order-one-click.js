$(document).ready(function() {
    /*
    $('.form_order').submit(function(e) {
        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();
        var submit = $("[type=submit]",this);
        var width =  $("[type=submit]",this).css("width");
        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классов .not_error равно 2(так как у нас всего 2 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату
        if ($('.not_error').length == 2) {
            $.ajax({
                url: 'feedback.php',
                type: 'post',
                data: $(this).serialize(),
                beforeSend: function(xhr, textStatus) {
                    $('form#feedback-form :input').attr('disabled', 'disabled');
                    submit.css("justify-content", "center");
                    submit.html("");
                    submit.css('min-width' , ''+width+'')
                    $('<img class="preloader" src="img/preloader.svg" alt="preloader" style="width: 13px; height: 13px;">').appendTo(submit);
                },
                success: function(response) {
                    $('form#feedback-form :input').removeAttr('disabled');
                    $('form#feedback-form :text, textarea').val('').removeClass('not_error').next('.error-box').text('');
                    submit.html("");
                    submit.html("Отправлено");
                    submit.prop('disabled', true);
                }
            }); 
        } else {
            return false;
        }
        // Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме


    }); 
    */
});