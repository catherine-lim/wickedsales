<?php
require_once('./functions.php');
require_once('./db_connection.php');

set_exception_handler('error_handler');

if (!$conn){
    throw new Exception("Connect failed: " . mysqli_connect_error());
}

$output = file_get_contents('./dummy-products-list.json');
print($output);

?>
