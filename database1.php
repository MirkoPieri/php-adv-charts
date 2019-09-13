<?php

  header('Content-type: application/json');

  include 'fulldb.php';

  $arr = [];

  if ($hola === "employee") {
    $arr[] = $graphs['fatturato_by_agent'];
  } if ($hola === "clevel") {
    $arr[] = $graphs['fatturato_by_agent'];
  }

echo json_encode($arr);
  //secondo grafico a torta
?>
