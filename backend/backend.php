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
    $text = preg_replace("/PostalCode/", "Индекс", $text, 1);
    $text = preg_replace("/Country/", "Страна", $text, 1);
    return $text;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $request = file_get_contents('php://input');
    $data = (array)json_decode($request);
    $domain_name = $data['domain_name'];

    $ip = gethostbyname($domain_name);

    if ($ip == $domain_name) {
        http_response_code(200);
        echo json_encode(array(
            array("error" => "Invalid domain name"),
        ));
        return;
    }

    $whois = get_whois($ip);

    $t1 = strpos($whois, "OrgName");
    $temp = substr($whois, $t1);
    $t2 = strpos($temp, "Country");
    $contacts = substr($temp, 0, $t2);
    $contacts = translate($contacts);
    $contacts = str_replace("<br>", "", $contacts);
    $contacts = str_replace("  ", "", $contacts);

    $link = mysqli_connect("localhost", "user", "1", "log");
    $db = mysqli_select_db($link, "log");

    $time = date(DateTime::ISO8601);
    $link->query("INSERT INTO Log(id, ip, name, time) VALUES(default, '$ip', '$domain_name', '$time')");

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
