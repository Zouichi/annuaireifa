<!DOCTYPE html>
<html>
<head>
	<link href="styles.css" rel="stylesheet" media="all" type="text/css" />
	<meta charset="UTF-8">
	<title>Annuaire des développeurs PHP certifiés OpenClassrooms</title>
</head>
<h1>Annuaire des développeurs PHP certifiés OpenClassrooms</h1>
<body>
<?php
$json_source = file_get_contents('list.json');
$json_data = json_decode($json_source, true); 
var_dump($json_data);
	
	print_r("$json_data");

?>
</body>
</html>