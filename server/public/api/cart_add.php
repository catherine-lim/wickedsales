<?php
require_once('./functions.php');

if (!defined('INTERNAL')) {
    print("Direct Access not allowed");
    exit();
}

$data = getBodyData();
$id = $data['id'];

if ($id) { 
    if (gettype($id) !== "integer") { /* if $id is not a number, throw error */
      throw new Exception("id must be a number");
    }
    if (intval($id) < 1) { /* if intval($id) is less than zero, throw error */
      throw new Exception("id must be greater than 0");
    }
  } else {                
    throw new Exception("id required to add to cart");
  }

$countData = $data['count'];
if ($countData){
    $count = $countData;
}

if (!empty($_SESSION['cartId'])){
    $cartID = $_SESSION['cartId'];
} else {
    $cartID = false;
}
$query= "SELECT price FROM `products` WHERE `id` = $id";
$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception("query error: " . mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0){
    throw new Exception("Invalid product ID");
}
$productData = [];
while($row = mysqli_fetch_assoc($result)){
    $productData[] = $row;
    $price = $productData[0]['price'];
}

$cart_transaction = "START TRANSACTION";
$transactionResult = mysqli_query($conn, $cart_transaction);

if(!$transactionResult){
    throw new Exception("transaction error" . mysqli_error($conn));
}

if(!$cartID){
    $insertQuery = "INSERT INTO `cart` SET `created` = NOW()";
    $insertResult = mysqli_query($conn, $insertQuery);

if(!$insertResult){
    throw new Exception("invalid result" . mysqli_error($conn));
}

if(mysqli_affected_rows($conn) !== 1){
    throw new Exception("Only one row should be affected");
}

$cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartID;
 
}

$insertCartItems = "INSERT INTO cartitems SET `count` = $count, `productID` = $id, `price`= $price, `cartID` = $cartID 
   ON DUPLICATE KEY UPDATE `count` = count + 1";

$insertCartItemsResult = mysqli_query($conn, $insertCartItems);

if (!$insertCartItemsResult) {
    throw new Exception("failed to get insert result" . mysqli_error($conn));
  };

if (mysqli_affected_rows($conn) < 1) {
    mysqli_query($conn, "ROLLBACK");
    throw new Exception("affected rows is not equal to 1");
  };
  mysqli_query($conn, "COMMIT");

?>