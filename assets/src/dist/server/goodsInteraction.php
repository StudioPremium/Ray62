<?php

	header("Content-Type: text/html; charset=utf-8");
    mb_internal_encoding('UTF-8');

	$title = 'Токарный станок'/*$_POST['title']*/;
	$text = 'Продукт добавлен в '/*$_POST['text']*/;
	$linktext = 'избранное'/*$_POST['linktext']*/;	
				
	$result['title'] = $title;
	$result['text'] = $text;
	$result['linktext'] = $linktext;

	if ($linktext == 'корзину'){$link = 'basket.html';}		
	if ($linktext == 'избранное'){$link = 'favorite.html';}
    
    $result['link'] = $link;


    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>