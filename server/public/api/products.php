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

$query = "SELECT `id`,`name`,`price`,`shortDescription`, `image`
FROM `products` P
WHERE EXISTS ( SELECT * FROM `images` WHERE `product_id` = P.id LIMIT 1)";
$result = mysqli_query($conn,$subQuery);
if (!$result) {
  throw new Exception('query error ' . mysqli_error($conn));
}
$query = "SELECT p.id, p.name, p.price, p.shortDescription,
	GROUP_CONCAT(i.url) AS images
FROM `products` AS p
JOIN `images` AS i
	ON p.id = i.product_id
  WHERE {$whereClause}
GROUP BY p.id";





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


$row['id'] = intval($row['id']);
$row['price'] = intval($row['price']);
$row['images'] = explode(",",$row['images']);

 $output[] = $row;
};

print(json_encode($output));

?>
