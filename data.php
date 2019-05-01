<?php

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

$domain_name = $_POST['domain_name'];

$start = microtime_float();
$ip = gethostbyname($domain_name);
$end = microtime_float();
$time = $end - $start;

$whois = get_whois($ip);
$t1 = strpos($whois, "OrgName");
$temp = substr($whois, $t1);
$t2 = strpos($temp, "# ARIN WHOIS");
$contacts = substr($temp, 0, $t2 - 10);

echo "
Доменное имя: $domain_name<br />
IP адрес: $ip<br />
Контактные данные:<br /> $contacts<br />
";

// TODO connect db
//$link = mysqli_connect("%", "php_user", "qwe123", "log");

// TODO insert log
// mysqli_query();

//mysqli_close($link);
