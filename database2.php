<?php

  header('Content-type: application/json');

  include 'fulldb.php';

  $arr = [];

  if ($hola === "clevel") {
    $arr[] = $graphs['team_efficiency'];
  }

  echo json_encode($arr);
  // secondo grafico a linea
?>
