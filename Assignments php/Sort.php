<!DOCTYPE html>
<html>
<body>
	<h2> Sorting an Array</h2>
<?php
$fruits = array("Mango", "Orange", "Banana");
sort($fruits);

$flength = count($fruits);
for($x = 0; $x < $flength; $x++) {
    echo $fruits[$x];
    echo "<br>";
}
?>
</body>
</html>
