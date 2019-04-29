<?php
$API_KEY = "1cf94e840097454101fdbb0a52ce1ec7ee7ce6ea";
$domain_name = $_POST['domain_name'];

$start = microtime();
$ip = gethostbyname($domain_name);
$end = microtime();
$time = $end - $start;

// https://dadata.ru/api/detect_address_by_ip/
$myCurl = curl_init();
curl_setopt_array($myCurl, array(
    CURLOPT_URL => "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address",
    CURLOPT_HTTPHEADER => array("Authorization: $API_KEY"),
    CURLOPT_POSTFIELDS => http_build_query(array("ip" => $ip))
));
$response = curl_exec($myCurl);
curl_close($myCurl);
$contacts = $response;

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
