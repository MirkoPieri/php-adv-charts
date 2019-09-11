<?php

  header('Content-type: application/json');

  include 'fulldb.php';

  $newArray1 = [];

  if ($acces == 'employee') {
   $newArray1[] = $graphs['fatturato_by_agent'];
 } elseif ($acces == 'clevel') {
  $newArray1[] = $graphs['fatturato_by_agent'];
}

  echo json_encode($newArray1);
  //secondo grafico a torta
?>
