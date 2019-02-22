<?php
$name = $_POST['name'];
$email = $_POST['email'];

if ($name != '' && $email != '')
{echo "сообщение успешно отправлено";} 
else 
{echo "при отправке сообщения возникли ошибки";}
?>