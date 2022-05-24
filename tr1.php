<html>
        <head>
		<meta charset="utf-8">
                <title>web6 tr1</title>
        </head>
        <body>
                <form method="post" action="">
			이름 <input type="text" name="name"/>
			나이 <input type="text" name="age"/>
			<input type="submit" value="입력"/>
		</form>
	</body>
</html>
<?php
	include('./dbinit.php');
	$name = $_POST['name'];
	$age = $_POST['age'];

	$query = "insert into test_table (name, age) values ('$name', $age)";
	mysqli_query($conn, $query);
	$query = "select * from test_table;";
	if ($result = mysqli_query($conn, $query)) {
		while ($row = mysqli_fetch_array($result)) {
			print_r($row);
			echo "<br>";
		}
	}
?>
