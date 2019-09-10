<?php

  $graphs = [
    'fatturato' => [
      'type' => 'line',
      'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
    ],
    'fatturato_by_agent' => [
      'type' => 'pie',
      'data' => [
        'Marco' => 9000,
        'Giuseppe' => 4000,
        'Mattia' => 3200,
        'Alberto' => 2300
        ]
    ]
  ];

  $CharLine = $graphs['fatturato']; //dati grafico a linea
  $charPie = $graphs['fatturato_by_agent']; //dati grafico a torta
  $pieVendite = []; //array vuoto per inserire vendite
  $pieNomi = []; //array vuoto per inserire nomi venditori
  $charPie2 = $charPie['data'];
  $newArrayPie = []; //array per nomi e vendite del grafico a torta
  foreach ($charPie2 as $key => $value) {
    //Fforeach per dividere nomi e vendite
    $pieNomi[] = $key;
    $pieVendite[] = $value;
  }

  $newArrayPie[] = $charPie['type']; //inserisco tipo grafico nel primo elemento dell'array
  $newArrayPie[] = $pieNomi; //inserisco i nomi nel secondo elemento dell'array
  $newArrayPie[] = $pieVendite; //inserisoc vendite nel terzo elemento dell'array


?>
