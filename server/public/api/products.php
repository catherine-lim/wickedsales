<?php
require_once('./functions.php');
set_exception_handler('error_handler');


startup();

require_once('./db_connection.php');

if(empty($_GET['id'])){
        $whereClause = 'GROUP BY products.id';
} else if(!is_numeric($_GET['id'])){
        throw new Exception("id needs to be a number");
} else {
        $whereClause = "WHERE products.id = " . $_GET['id'];   
}

$query = "SELECT products.id, products.name, products.price, products.shortDescription, 
GROUP_CONCAT(DISTINCT images.url ORDER BY images.url ASC) AS image
FROM products JOIN images ON products.id = images.productId " .$whereClause;


$result = mysqli_query($conn, $query);

if(!$result){
        throw new Exception("Connect failed: " . mysqli_error($conn));
}


if(!mysqli_num_rows($result)){
throw new Exception("invalid ID:" . ($_GET['id']));
}



$output = array();

while ($row = mysqli_fetch_assoc($result)) {
$row['image'] = explode(",", $row['image']);
 $output[] = $row;
};

print(json_encode($output));

?>
