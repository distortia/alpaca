<?php
$servername = "localhost";
$username = "nstalus_paca";
$password = "alpaca";
$database = "nstalus_alpaca";

$link = mysql_connect($servername, $username, $password);
if (!$link) {
    die('Not connected : ' . mysql_error());
}
else{
	echo "Connected to SQL\r\n";
}

// make foo the current db
$db_selected = mysql_select_db($database , $link);
if (!$db_selected) {
    die ('Can\'t use'. $database.'  : ' . mysql_error());
}
else{
	echo "Connected to DB \r\n";
}

// Query to select an int column
//$query = 'SELECT * FROM alpaca';
//$result = mysql_query($query);
$sql = 'SELECT * FROM alpaca';
$result = mysql_query($sql);
echo "<br>";

while($row = mysql_fetch_assoc($result)) {
   echo json_encode($row) . "<br>";
}
?>