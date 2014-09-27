<?php
header("HTTP/1.0 404 Not Found");
header("Content-type: application/json; charset=utf-8");

// echo '<img src="avatar/daniel.jpg" alt="" class="avatar">
// <img src="avatar/gustavo.jpg" alt="" class="avatar">
// <img src="avatar/paulo.jpg" alt="" class="avatar">'; 

$objeto = array();
$objeto['status'] = TRUE;
$objeto['dados'] = array("daniel", "paulo", "gustavo");


// $objeto['status'] = FALSE;
// $objeto['message'] = "Nenhum funcionário se destacou esse mês";


echo json_encode($objeto);


?>