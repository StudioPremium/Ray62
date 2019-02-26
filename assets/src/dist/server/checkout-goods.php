<?php

	header("Content-Type: text/html; charset=utf-8");
    mb_internal_encoding('UTF-8');

	$title = 'Токарный станок'/*$_POST['title']*/;
	$text = 'Продукт удален из '/*$_POST['text']*/;
	$linktext = 'заказа'/*$_POST['linktext']*/;	
	$link = 'checkout-goods.html';
				
	$result['title'] = $title;
	$result['text'] = $text;
	$result['linktext'] = $linktext;
	$result['link'] = $link;



    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>