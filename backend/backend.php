<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function microtime_float()
{
    list($usec, $sec) = explode(" ", microtime());
    return ((float)$usec + (float)$sec);
}

function get_whois($ip, $server = "whois.arin.net")
{
    $sock = fsockopen($server, 43, $errno, $errstr);
    if (!$sock) {
        exit("$errno($errstr)");
    } else {
        fputs($sock, $ip . "\r\n");
        $text = "";
        while (!feof($sock)) {
            $text .= fgets($sock, 128) . "<br>";;
        }
        fclose($sock);

        $pattern = "|ReferralServer: whois://([^\n<:]+)|i";
        preg_match($pattern, $text, $out);
        if (!empty($out[1])) {
            return get_whois($ip, $out[1]);
        } else {
            return $text;
        }
    }
}

function translate($text)
{
    $text = preg_replace("/OrgName/", "Название организации", $text, 1);
    $text = preg_replace("/OrgId/", "Id организации", $text, 1);
    $text = preg_replace("/Address/", "Адрес", $text, 1);
    $text = preg_replace("/City/", "Город", $text, 1);
    $text = preg_replace("/StateProv/", "Штат", $text, 1);
    $text = preg_replace("/PostalCode/", "Индекс", $text, 1);
    $text = preg_replace("/Country/", "Страна", $text, 1);
    $text = preg_replace("/RegDate/", "Дата регистрации", $text, 1);
    $text = preg_replace("/Updated/", "Обновлено", $text, 1);
    $text = preg_replace("/Ref/", "Ссылка", $text, 1);
    $text = preg_replace("/ReferralServer/", "Сервер", $text, 1);
    $text = preg_replace("/ResourceLink/", "Ссылка на ресурсы", $text, 1);
    $text = preg_replace("/OrgAbuseHandle/", "Владелец огранизации", $text, 1);
    $text = preg_replace("/OrgAbuseName/", "Название владельца организации", $text, 1);
    $text = preg_replace("/OrgAbusePhone/", "Номер владельца организации", $text, 1);
    $text = preg_replace("/OrgAbuseEmail/", "Почта владельца организации", $text, 1);
    $text = preg_replace("/OrgAbuseRef/", "Сслыка владельца организации", $text, 1);
    $text = preg_replace("/OrgTechHandle/", "Организация", $text, 1);
    $text = preg_replace("/OrgTechName/", "Название организации", $text, 1);
    $text = preg_replace("/OrgTechPhone/", "Номер организации", $text, 1);
    $text = preg_replace("/OrgTechEmail/", "Почта организации", $text, 1);
    $text = preg_replace("/OrgTechRef/", "Ссылка организации", $text, 1);
    return $text;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $request = file_get_contents('php://input');
    $data = (array)json_decode($request);
    $domain_name = $data['domain_name'];

    $start = microtime_float();

    $ip = gethostbyname($domain_name);
    $whois = get_whois($ip);

    $end = microtime_float();
    $time = ($end - $start) * 1000;

    $t1 = strpos($whois, "OrgName");
    $temp = substr($whois, $t1);
    $t2 = strpos($temp, "# ARIN WHOIS");
    $contacts = substr($temp, 0, $t2 - 10);
    $contacts = translate($contacts);
    $contacts = str_replace("<br>", "", $contacts);
    $contacts = str_replace("  ", "", $contacts);
    $contacts = str_replace("   ", "", $contacts);

    $link = mysqli_connect("localhost", "user", "1", "log");
    $db = mysqli_select_db($link, "log");

    $link->query("INSERT INTO Log(id, ip, name, time) VALUES(default, '$ip', '$domain_name', $time)");

    mysqli_close($link);
    http_response_code(200);
    echo json_encode(array(
        array("domain_name" => $domain_name),
        array("ip" => $ip),
        array("contacts" => $contacts)
    ));
} else if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
} else {
    echo json_encode(array("Error" => "No controller for not POST request"));
    http_response_code(404);
}
