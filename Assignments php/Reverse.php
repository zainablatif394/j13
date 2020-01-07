<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Reverse</title>
</head>
<body>
	<h2>REVERSE THE STRING</h2>
<?php
$string = 'Noor e Hira';
$reverse = '';
$i = 0;
while(!empty($string[$i])){ 
      $reverse = $string[$i].$reverse; 
      $i++;
}
echo $reverse;
?>
</div>
</body>
</html>