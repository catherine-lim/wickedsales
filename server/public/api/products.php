<?php
require_once('./functions.php');
set_exception_handler('error_handler');
set_error_handler('error_handler');

startup();

require_once('./db_connection.php');

if(empty($_GET['id'])){
        $whereClause = '';
} else if(!is_numeric($_GET['id'])){
        throw new Exception("id needs to be a number");
} else {
        $whereClause = "WHERE id = " . $_GET['id'];   
}

// $subQuery = "SELECT `id`,`name`,`price`,`shortDescription`, `image`
// FROM `products` P
// WHERE EXISTS ( SELECT * FROM `images` WHERE `product_id` = P.id LIMIT 1)";
// $subResult = mysqli_query($conn,$subQuery);
// if (!$subResult) {
//   throw new Exception('query error ' . mysqli_error($conn));
// }

// $query = " SELECT products.id, products.name, products.shortDescription, products.price, 
// (SELECT `url` FROM `images` WHERE `product_id` = products.`id` LIMIT 1) AS image
// FROM `products` " . $whereClause;





$query = "SELECT * FROM `products` " .$whereClause;
$result = mysqli_query($conn, $query);

if(!mysqli_num_rows($result)){
throw new Exception("invalid ID:" . ($_GET['id']));
}

if(!$result){
    throw new Exception("Connect failed: " . mysqli_error());
}

$output = array();

while ($row = mysqli_fetch_assoc($result)) {
 $output[] = $row;
};

print(json_encode($output));

?>
