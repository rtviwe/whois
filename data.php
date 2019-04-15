<?php
$domain_name = $_POST["domain_name"];
$ip = gethostbyname($domain_name);
echo "
Доменное имя: $domain_name<br />
IP адрес: $ip<br />
";
