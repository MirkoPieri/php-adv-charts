<?php

  header('Content-type: application/json');

  include 'fulldb.php';

  $arr = [];

  if ($hola === "guest") {
    $arr[] = $graphs['fatturato'];
  } if ($hola === "employee") {
    $arr[] = $graphs['fatturato'];
  } if ($hola === "clevel") {
    $arr[] = $graphs['fatturato'];
  }

  echo json_encode($arr);
  // var_dump($access);

  // primo grafico a linea
?>
