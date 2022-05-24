<html>
        <head>
                <meta charset="UTF-8">
		<title>web6 tr1</title>
        </head>
        <body>
		<table border="1px">
			<tr>
				<td>이름</td>
				<td>학교</td>
				<td>학과</td>
				<td>성별</td>
				<td>입학년도</td>
				<td>이메일</td>
				<td>전화번호</td>
				<td>생일</td>
				<td>학년</td>
				<td>학점</td>
			</tr><tr>
<?php
	include('./dbinit.php');
	$query = 'select * from Old_Member union select * from New_Member';
	if ($result = mysqli_query($conn, $query)) {
		while ($row = mysqli_fetch_row($result)) {
			unset($row[0]);
			foreach($row as $cell){
				echo "<td>$cell</td>";
			}
			echo '</tr><tr>';
		}
	}
?>
		</tr></table>
	</body>
</html>
