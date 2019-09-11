<?php

  header('Content-type: application/json');

  include 'fulldb.php';
  $hola = $_GET['level'];

  $nul = [];

    if ($hola == 'clevel') {
    echo json_encode($graphs['team_efficiency']);
  } else {
    echo json_encode($nul);
  }

  // secondo grafico a linea
?>
