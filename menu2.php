<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>food menu</title>
<body>
	<h1>FOOD MENU</h1>
	<form id="day" action="" method="post">
		<input type="text" placeholder="enter the day today meals" name="day">
		<br>
		<br>
		<input type="submit" name="submit">
		<br><br>
	</form>
	<?php
		if (isset($_POST['submit'])) {
			$day=$_POST['day'];
		if ($day=="monday") {
			 echo "Today's meals is Cheeze Pasta";
		}
		elseif ($day=="tuesday") {
			echo "today's meals is Chicken Bryani";
		}
		elseif ($day=="Wednesday") {
			echo "today's meals is Shashlic with egg fried rice";
		}
		elseif ($day=="Thursday") {
			echo "today's meal is Chicken Karahi";
		}
		elseif ($day=="friday") {
			echo "today's meals is Desserts";
		}
		elseif ($day=="saturday") {
			echo "today's meals is  Fast Food";
		}
		elseif ($day=="sunday") {
			echo "todays meals is Chicken Qorma";
		}
		else
		{
			echo "Enter the day cearfully";
		}

		}
		?>
</body>
</html>