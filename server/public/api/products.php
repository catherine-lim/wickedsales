<?php

require_once('./functions.php');
set_exception_handler('error_handler');

doStuff();

$output = file_get_contents('./dummy-products-list.json');
print($output);


?>
