<?php



  header('Content-type: application/json');

  include 'fulldb.php';

  $hola = $_GET['level'];

  $array1 = [];

  if ($hola == 'guest') {
    echo json_encode($graphs['fatturato']);
  } else if ($hola == 'employee') {
    echo json_encode($graphs['fatturato']);
  } else if ($hola == 'clevel') {
    echo json_encode($graphs['fatturato']);
  }


  // primo grafico a linea
?>
