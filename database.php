<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $db = "ps";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   
 $conn = OpenCon();

 if(array_key_exists('reset', $_POST)) {
   insert_current_value(1,2);
}

 function insert_current_value($start,$end){
    echo "aaaaaa";
 }
?>