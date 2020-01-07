<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Switch statement</title>
</head>
<body>
	<form action="" method="post">
		<input type="text" name="day" placeholder="Enter the day.....">
		<br><br>
		<input type="submit" name="submit">
	</form>
	<?php
	if (isset($_POST['submit'])) {
		switch ($_POST['day']) {
			case 'monday':
				echo "mondays meal is Bryani";
				break;
				case 'tuesday':
				echo "today meal is Karahi";
				break;
				case 'wednesday':
				echo "wednesday meal is Chicken Kabab";
				break;
				case 'thursday':
				echo "today meal is Beaf Kabab";
				break;
				case 'friday':
				echo "friday meal is Fast Food";
				break;
				case 'saturday':
				echo "saturday meal is Karahi";
				break;
			
				case 'sunday':
				echo "sunday meal is Dessert";
				break;
			default:
				echo "Enter valid day";
				break;
		}
	}
	?>
	
</body>
</html>