<?php

  header('Content-type: application/json');

  include 'fulldb.php';

  $newArray = [];

  if ($acces == 'guest') {
    $newArray[] = $graphs['fatturato'];
  } elseif ($acces == 'employee') {
    $newArray[] = $graphs['fatturato'];
  } elseif ($acces == 'clevel') {
    $newArray[] = $graphs['fatturato'];
  }

  echo json_encode($newArray);

  // primo grafico a linea
?>
