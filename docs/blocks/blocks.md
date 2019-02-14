# Блоки

Описание блоков, существующих в проекте. Блоки от bootsrap имеют внешнюю геометрию, собственные блоки - нет. Она задается либо элементам, либо с помощью утилит таких как `.mx-auto, .mt-5`.
По возможности используются компоненты bootstrap, зменение стилей таких компонентов происходит посредством переопределения дефолтных стилей. Переопределение происходит в файле `style\variables.scss`

## Хедер

![хедер](../header.jpg)

html-файл этого блока находится в файле `template\header\header.html`

Хедер страницы состоит из нескольких элементов, требующих внимания.

Элемент навигации о страницам

	<ul id="header__navigation" class="nav header-nav">
	    <li class="nav-item">
	    <a class="nav-link" href="#">Акции</a>
	    </li>
	    <li class="nav-item">
	    <a class="nav-link" href="#">Новости</a>
	    </li>
	    <li class="nav-item">
	    <a class="nav-link" href="#">О проекте</a>
	    </li>
	    <li class="nav-item">
	    <a class="nav-link" href="#">Контакты</a>
	    </li>
	</ul>

Элемент навигации по категориям

	<div id="header-categories" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	     <a class="dropdown-item" href="#">Категория</a>
	</div>

Содержание этих элементов используется для составления навигации в мобильном меню.

## Мобильное меню

![мобильное меню](../mobile-menu.jpg)

Содержание этого блока состоит из элементов хедера. При разрешении, где требуется
мобильное меню элементы хедера передаются в нужное место мобильного меню. Например содержание категорий хедера
передается в аккордеон мобильное меню.

## Единица каталога

![Единица каталога](../catalog-itm.jpg)

Класс `.catalog-itm`. 

В дизайне существует 2 варианта единицы каталога:

* Имеющий только заголовок

![Единица каталога](../catalog-itm.jpg)

* имеющий подразделы - навигацию по единице каталога

![Единица каталога с подразделом](../catalog-itm-sub.jpg)

Единица каталога предполагает наличие иконки, данный функционал реализован через модификаторы блока.
В зависимости от мобификатора, с помощью css свойства `background-image` подставляется нужная иконка.

В дизайне пока имеется только 1 вариант иконки, в дальнейшем список модификаторов будет пополняться.

Перечень модификаторов:

* `.catalog-itm_auto` ![Иконка с машиной](../catalog-itm-icon.jpg)

## Карточка продукта

![Карточка продукта](../card-product.jpg)

Класс `.card-product`

Для предотвращения увеличения блока по высоте, его заголовку добавлено свойства

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

Эти свойства не дают длинному заголовку перейти на следующую строку, если строка слишком длинная - добавляется многоточие.

Количество позиций в карточке - 3 единицы. Кнопка подробнее - ссылка на детальную страницу товара. 
На клиент требуется передавать строку с ценой, пропущенную через регулярное выражение, для деления числа на разряды.

## Заголовок с подчеркиванием

![Заголовок](../title.jpg)

	<h2 class="h2 title_underline title_underline_left">
	    <span class="title__text">Объявления в городах</span>
	</h2>

Модификатор `.title_underline`

Такой тип заголовка используется для названия секций. Он добавляет подчеркивание, зависящее от длины элемента `.title__text` внутри заголовка.

## Список городов

![Список городов](../city-list.jpg)

Класс `.city-list`

Имеет содержание ввиде текста `.city-list__text`, например "Рязань" и ярлыка `.city-list__badge` с количеством доступных предложений в этом городе.

	<li class="city-list__itm">
	    <a href="#" class="city-list__text">Рязань 
	    <span class="city-list__badge badge badge-primary">1567</span></a>
	</li>

## Список компаний

![Список компаний](../company-list.jpg)

Класс `.company-list`

Содержит набор изображений выстроенных в строку с помощью css свойств:

	display: flex;
	flex-wrap: wrap;

На мобильных устройствах данный блок преобразуется в слайдер

## Новости

![Новости](../news.jpg)

Класс `.news`

Представляет собой небольшую новость с заголовком и содержанием. На счет высоты такого блока узнать позднее.

## Дата

![Дата](../date.jpg)

Класс `.date`

Небольшой блок содержащий строку с датой.

## Футер 

![Футер](../footer.jpg)

Класс `.footer`

html-код этого блока расположен в файле `dist\template\footer\footer.html`

Содержит разделы ссылками на страницы, и текстовый блок второстепенной информацией.
Заголовки разделов `.footer__title` так же являются ссылками.

## Хлебные крошки

![Хлебные крошки](../breadcrumb.jpg)

Класс `.breadcrumb`

html-код этого блока расположен в файле `dist\template\breadcrumb\breadcrumb.html`

	<nav aria-label="breadcrumb">
	  <ol class="breadcrumb">
	    <li class="breadcrumb-item"><a href="#">Главная</a></li>
	    <li class="breadcrumb-item active" aria-current="page">Новости</li>
	  </ol>
	</nav>

В неактивном элементе списка `.breadcrumb-item` текст оборачивается тегом `<a></a>` с ссылкой на требуемую страницу. В активном элементе списка `breadcrumb-item.active` текст не оборачивается.

## Блок с рекламой

![Блок с рекламой](../ad-unit.jpg)

класс `.ad-unit`

	<div class="ad-unit">
	    <img class="img-fluid" src="dist/img/ad-unit-img.JPG" alt="ad">
	</div>

Представляет собой обертку для скрипта рекламы. В макете заполнителем является картинка, при натяжке заменять ее на скрипт.

## Карточка с новостями

![Карточка с новостями](../card-news.jpg)

Класс `.card-news`

Карточка с новостями имеет заголовок содержащий ссылку на полную новость:

	<h2 class="card-title">
	    <a href="#">Торцовочный станок ЦПА-40, устройство, назначение, область применения</a>
	</h2>
И сам текст новости, лежащий в элементе `.card-news__text`:

	<div class="card-news__text">
	    <p>
	        Линейная направляющая пильного узла ограничивает ширину заготовки только собственной длиной. Так, в модели ЦПА-40 ход пильного суппорта достигает 400 мм. Чтобы устройство двигалось в одном направлении — направлении подачи пилы, суппорт имеет несколько типов роликов. Да и форма самой направляющей достаточно сложная. Она подвержена интенсивному износу, воздействию контактных и изгибных нагрузок, так как имеет консольную форму. 
	    </p>
	</div>

## Пагинация

![Пагинация](../pagination.jpg)

Класс `.pagination` 

	<nav aria-label="page navigation">
	  <ul class="pagination justify-content-between justify-content-sm-center">
	  	<li class="page-item disabled">
	      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Назад</a>
	    </li>
	    <li class="page-item active" aria-current="page">
	    	<span class="page-link">
	        1
	        <span class="sr-only">(current)</span>
	      	</span>
	    </li>
	    <li class="page-item">
	    	<a class="page-link" href="#">2</a>
	    </li>
	    <li class="page-item">
	    	<a class="page-link" href="#">3</a>
	    </li>
	    <li class="page-item">
	    	<a class="page-link" href="#">4</a>
	    </li>
	    <li class="page-item">
	    	<a class="page-link" href="#">10</a>
	    </li>
	    <li class="page-item">
	    	<a class="page-link" href="#">Вперед</a>
	    </li>
	  </ul>
	</nav>

В зависимости от нахождения, должены меняться элементы, например:

Если это страница, на которой находится пользователь - первая, то клавиша "назад"" меняется на:
	
	<li class="page-item disabled">
		<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Назад</a>
	</li>

Для `<li class="page-item"></li>` добавляется класс `.disabled`, самой ссылке `<a class="page-link" href="#">Назад</a>`
добавляются атрибуты `tabindex="-1" aria-disabled="true"`

Соответсвенно так же происходит с кнопкой "вперед", если страница на которой находится пользователь - последняя.

## Галерея товара

![Галерея товара](../product-gallery.jpg)

Класс `.product-gallery` 

Галерея содержит 2 модификатора: 

![Галерея товара](../product-gallery-min.jpg)

Модификатор `.product-gallery_min`. Изображения в данной галерее растягиваются по ширине на 100%. 

и `.product-gallery_big`

![Галерея товара](../product-gallery-big.jpg)

Связываются посредством плагина [slick](http://kenwheeler.github.io/slick/)

## Ссылка для смены 

![ссылка для смены](../link-switch-1.jpg) ![ссылка для смены](../link-switch-2.jpg)

Класс `.link-switch`

Блоки, используемые для смены чего либо.

## Кнопки

![кнопка 1](../btn-1.jpg) ![кнопка 2](../btn-2.jpg)

Обыкновенные кнопки бустрапа, [подробнее о них](https://getbootstrap.com/docs/4.3/components/buttons/). В случае, если базового функционала не хватает, создаются собственные модификаторы. Стили для таких модификаторов описаны в файле `style\blocks\btn\_btn.scss`

## Слайдер изображений

![](../slider-img.jpg)
![](../slider-img-2.jpg)

Используется плагин [slick](http://kenwheeler.github.io/slick/). Дефотные стили этого плагина переопределяются в файле `style\blocks\_slick-carousel.scss`

## Табы

![](../tabs.jpg)

Используются компонент bootstrap. Переопределение в файле `style\block\nav-pills\_nav-pills.scss` В мобильном варианте добавляется прокрутка.

## Рейтинг

![](../rating.jpg)

Класс `.rating`

	<ul class="rating">
	    <li class="rating__itm">
	        <span class="rating__star rating__star_full"></span>
	    </li>
	    <li class="rating__itm">
	        <span class="rating__star rating__star_full"></span>
	    </li>
	    <li class="rating__itm">
	        <span class="rating__star rating__star_full"></span>
	    </li>
	    <li class="rating__itm">
	        <span class="rating__star"></span>
	    </li>
	    <li class="rating__itm">
	        <span class="rating__star"></span>
	    </li>
	</ul>

Для того чтобы сделать одну из звезд `.rating__star` заполненной, этому элементу следует добавить модификатор `.rating__star_full`

	<span class="rating__star rating__star_full"></span>

## Ссылка

![](../link.jpg)

Класс `.link`

Используется для создания ссылки с какой-либо иконкой. Содержит элемент `.link__icon`, отвечающий за иконку и `.link__text`, отвечающий за текстовую составляющую 
ссылки.

	<a href="#" class="link">
	    <i class="icon icon_message link__icon"></i>
	    <span class="link__text">Написать продавцу</span>
	</a>

## Иконки

![](../icon.jpg)

класс `.icon`

Обозначает иконки, вариант иконки реализуется через модификатор. Перечень модификаторов расположен в файле `style\icons\_icons.scss`

	<i class="icon icon_message"></i>

## Информация о продавце

![](../seller-info.jpg)

Класс `.seller-info`

	<div class="seller-info seller-info_min">
	    <h5 class="seller-info__title">Контактные данные</h5>
	    <ul class="seller-info__list">
	        <li class="seller-info__itm">
	            <span class="seller-info__caption">Продавец:</span>
	            <div class="seller-info__content">
	                <a href="#" class="seller-info__text seller-info__text_name">Андрей Васильевич</a>
	                <a href="#" class="seller-info__text seller-info__text_all-ads">Все объявления продавца</a>
	            </div>
	        </li>
	    </ul>
	</div>

Содержит:

* Заголовок блока `.seller-info__title`;
* Список `.seller-info__list`;
* Элемент `.seller-info__itm`; 
* Подпись позиции `.seller-info__caption`; 
* Контент позиции  `.seller-info__content`;
* Текст позиции `.seller-info__text` с различными модификаторами.

## Тосты

![](../toast.jpg)

Класс родителя `.toast-box`, класс самого тоста `.toast`

	<div class="toast-box" aria-live="polite" aria-atomic="true">
	    <div style="position: absolute; top: 0; right: 0;">
	        <div id="toast" class="toast fade" role="alert" aria-live="assertive" aria-atomic="true">
	            <div class="toast-header">
	                <strong class="mr-auto toast__title"></strong>
	                <button type="button" class="ml-3 mb-1 close" data-dismiss="toast" aria-label="Close">
	                    <span aria-hidden="true">&times;</span>
	                </button>
	            </div>
	            <div class="toast-body">
	                <span class="toast__text"></span><a href="#" class="toast__link"></a>
	            </div>
	        </div>
	    </div>
	</div>

Используется для показа всплывающей информации после какого-либо действия. Новые тосты не создаются, меняется содержимое одного тоста. Данные для заполнения забирются с сервера с помощью `ajax`.

## Модальное окно с выбором региона

![](../modal-region.jpg)

html-файлы блока расположены в `template\modal-region\modal-region.html`

Состоит из списков городов - блока `.area-switcher` и строки поиска по городам - блока `.search`.

## Список городов для выбора

![](../area-switcher.jpg)

Состоит из заголовка списка `.area-switcher__title`, самого списка городов `.area-switcher__cities` и раздела дополнительной информации `.area-switcher__more`.
Для изменения иконки страны, элементу `.area-switcher__title` добавляется соответсвующий модификатор. 

Перечень модификаторов для изменения страны: 

* Россия - `.area-switcher__title_russia`
* Украина - `.area-switcher__title_ukraine`
* Узбекистан - `.area-switcher__title_uzbekistan`
* Белорусь - `.area-switcher__title_belarus`

## Поиск

![](../search.jpg) 

Класс `.search`

Форма поиска, меняющая свой внешний ввид в зависимости от того, где этот блок находится, дефолтное отображение вы видете сверху. Например если перенести эту строку поиска в мобильное меню, то его внешний вид изменится:

![](../search-mobile.jpg), 

а стили будут изменены с помощью вложения в родитель `.mobile-menu__search`

![](../search-mobile-code.jpg)

## Поиск по городам

![](../search-cityes.jpg)

Поиск по городам реализован с помощью блока поиска `.search` и компонента [jquery-ui-autocomplete](https://jqueryui.com/autocomplete/)

На каждой странице, перед закрытием тега `<body>` расположен объект, содержащий перечень городов, он заполняется при формировании страницы на сервере

	$( function() {
        // Массив с названием городов
        var availableTags = [
            "Москва",
            "Санкт-Петербург",
            "Волгоград",
            "Воронеж",
            "Екатеринбург",
            "Казань",
            "Калуга",
            "Краснодар",
            "Нижний Новгород",
            "Новосибирск",
            "Ростов-на-Дону",
            "Самара",
            "Саратов",
            "Сочи",
            "Уфа",
            "Ярославль",
            "Киев",
            "Днепр",
            "Донецк",
            "Запорожье",
            "Кривой рог",
            "Львов",
            "Одесса",
            "Харьков",
            "Минск",
            "Брест",
            "Витебск",
            "Гомель",
            "Гродно",
            "Могилев",
            "Ташкент",
        ];

        // включаем автодополнение
        $( "#cityes-search-input" ).autocomplete({
            source: availableTags
        });

    });

## Модальное окно для заказа в 1 клик

![](../modal-click-order.jpg)