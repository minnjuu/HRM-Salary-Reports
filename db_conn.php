<?php
 $servername = "localhost";
 $username = "root";
 $password = "seagate";
 $dbname = "hrm_backup";
 
 
 $conn = new mysqli($servername, $username, $password, $dbname);
 
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  //echo "connected.";
?>
