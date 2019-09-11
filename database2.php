<?php

  header('Content-type: application/json');

  include 'fulldb.php';

  $newArray2 = [];

    if ($acces == 'clevel') {
    $newArray2[] = $graphs['team_efficiency'];
  }

  echo json_encode($newArray2);
  // secondo grafico a linea
?>
