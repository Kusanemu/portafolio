<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Práctica 8</title>
</head>
<body>
    <center>
    <h1>Tabla Random</h1>
    <p>
        <?php

            for($i=0; $i<20; $i++){
                $array[]=rand(1, 100);
            }
            
            echo "<table border='1'><tr>";
            for($i=19; $i>=0; $i--){
                echo "<td>", "Elemento $i", "</td>";
            }
            echo "</tr><tr>";
            for($i=19; $i>=0; $i--){
                echo "<td>", $array[$i], "</td>";
            }

            echo "</tr></table";
        ?>
    </p>
</center>
</body>
</html>