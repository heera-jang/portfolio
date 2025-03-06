<?
    $connect=mysqli_connect( "localhost", "heera", "1234", "heera_db") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "heera_db");
?>