<?php
  
    require_once __DIR__.'/db/db.php';
    header('Content-Type: application/json');

    $filter = isset($_GET["filter"]) ? $_GET["filter"] : '';

    if( strlen($filter) !== 0){
        $tmp =[];
        foreach($music_db as $value){
            if(stripos($value['author'] , $filter) !== false ){
                $tmp[] = $value;
            }
        }
        echo json_encode($tmp);  
    } else{
        echo json_encode($music_db);
    }

    


    

    

?>