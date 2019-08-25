<?php
require_once('./functions.php');
set_exception_handler('error_handler');
set_error_handler('error_handler');

startup();

require_once('./db_connection.php');

if(empty($_GET['id'])){
 $whereClause = '';
} else{
 $whereClause = "WHERE id = " . $_GET['id'];
}

if(!is_numeric($_GET['id'])){
    throw new Exception("id needs to be a number");
} else {
    throw new Exception("invalid ID:" . ($_GET['id']));
}

$query = "SELECT * FROM `products` " .$whereClause;

$result = mysqli_query($conn, $query);
if(!$result){
    throw new Exception("Connect failed: " . mysqli_error());
}
$output = array();

while ($row = mysqli_fetch_assoc($result)) {
 $output[] = $row;
};
print(json_encode($output));
?>
