<?php
if (isset($_POST['domain_name'])) {
    $domain_name = $_POST['domain_name'];
} else {
    $domain_name = "ошибка: нет доменного имени";
}

$start = microtime();
$ip = gethostbyname($domain_name);
$end = microtime();
$time = $end - $start;

// TODO find contacts
$contacts = "";

echo "
Доменное имя: $domain_name<br />
IP адрес: $ip<br />
Контактные данные: $contacts<br />
";

// TODO connect db
//$link = mysqli_connect("%", "php_user", "qwe123", "log");

// TODO insert log
// mysqli_query();

//mysqli_close($link);
