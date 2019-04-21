<?php
if (isset($_POST['submit'])) {
    $domain_name = $_POST["domain_name"];
} else {
    $domain_name = "ошибка: нет доменного имени";
}

$start = microtime();
$ip = gethostbyname($domain_name);
$end = microtime();
$time = $end - $start;

echo "
Доменное имя: $domain_name<br />
IP адрес: $ip<br />
";

$link = mysqli_connect("%", "php_user", "qwe123", "log");

// TODO insert log
// mysqli_query();

mysqli_close($link);

