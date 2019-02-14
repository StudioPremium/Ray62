$(document).ready(function() {
    // Устанавливаем обработчик потери фокуса для всех полей ввода текста
    $('.form input, .form textarea').blur(function() {
        /*
        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные 
        var name = $(this).attr('name');
        var val = $(this).val();
        // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
        switch (name) {
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig; // используем регулярное выражение

                // Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box')
                           .text('Принято')
                           .css('color', 'green');
                }

                // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box')
                           .html('&bull; поле "Имя" обязательно для заполнения<br> &bull; длина Имени должна составлять не менее двух символов<br> &bull; поле должно содержать только русские или латинские буквы<br>')
                           .css('color', 'red');
                }
                break;


                // Проверка телефона
            case 'tel':
                
                if (val.length == 18) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box')
                           .text('Принято')
                           .css('color', 'green');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box')
                           .html('&bull; поле "Телефон" обязательно для заполнения<br> &bull; поле должно содержать правильный правильный телефон, <br> (например: +7 (800) 000-00-00)')
                           .css('color', 'red');
                }
                break;

            case 'email':

                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

                if(val != '' && rv_email.test(val)) {
                    $(this).addClass('not_error');
                    $(this).next('.error-box')
                           .text('Принято')
                           .css('color', 'green');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box')
                           .html('&bull; поле "Email" обязательно для заполнения<br> &bull; поле должно содержать правильный email-адрес<br>')
                           .css('color','red');
                }
                break;
        } 
    */
    }); 
}); 
