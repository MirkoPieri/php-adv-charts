<?php

  header('Content-type: application/json');

  include 'fulldb.php';
  $hola = $_GET['level'];

  $nul = [];

  if ($hola === 'employee') {
   echo json_encode($graphs['fatturato_by_agent']);
 } elseif ($hola === 'clevel') {
  echo json_encode($graphs['fatturato_by_agent']);
} else {
  echo json_encode($nul);
}
  //secondo grafico a torta
?>
