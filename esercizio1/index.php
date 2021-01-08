<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MUSIC DATA</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
     <link rel="stylesheet" href="style.css">
</head>
<body>
<?php 
   include 'db.php' ;  
?>

<div class="container">
    <div class="row">
        <?php 
        foreach ($music_db as $cd => $value) {
            
        ?> 
        <div class="col-3">
           
        <?php 
          echo "<img src='".$value["poster"]."'alt=''>";
          echo "<h2>".$value["title"]."</h2>";
          echo "<p>".$value["author"]."</p>";
          echo "<p>".$value["genre"]."</p>";
          echo "<p>".$value["year"]."</p>"; 
        ?>
        </div>
        
        <?php  
         
        };
        ?>
        
    </div>
</div>
    
</body>
</html>










