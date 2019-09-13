function init() {
  moment.locale('it');
  // var access = 'clevel';
  getDataLine();
  getDataPie();
  getDataLine2();
} //funzione principale

$(document).ready(init);


function get_Moment() {
  var month = moment.months('MMMM');
  return month;
} //funzione per mesi dell'anno

function getChart(data) {
    var datiLine = data[0];

    if (datiLine != null) {
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: datiLine.type,
        data: {
            labels:  get_Moment(),
            datasets: [{
                label: 'Vendite',
                data: datiLine.data,
                pointBackgroundColor: [
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green',
                  'green'
                ],
                backgroundColor: [
                  'green'
                ],
                borderColor: [
                  'red'
                ],
                borderWidth: 4
            }]
        }
      });
    } //chiusura if
} //funzione creare primo grafico a linea

function getChart2(data) {
    var arrayDati = data[0];

    if (arrayDati != null) {
      var team = Object.keys(arrayDati.data);
      var value = Object.values(arrayDati.data);

      var data1 = {
                    label:  team[0],
                    data: value[0],
                    borderColor: [
                      'green'
                    ],
                  };

      var data2 = {
                    label:  team[1],
                    data: value[1],
                    borderColor: [
                      'red'
                    ]
                  };

      var data3 = {
                    label:  team[2],
                    data: value[2],
                    borderColor: [
                      'yellow'
                    ]
                  };

      var ctx = document.getElementById('myChart2').getContext('2d');
      var myChart = new Chart(ctx, {
          type: arrayDati.type,
        data: {
            labels:  get_Moment(),
            datasets: [data1, data2, data3]
        }
      });
    } //chiusura if
} //funzione creare secondo grafico a linea

function getChartPie(data) {

  var arrayPie = data[0];

  if (arrayPie != null) {
    var names = Object.keys(arrayPie.data); //prendo nomi venditori
    var values = Object.values(arrayPie.data); //prendo vendite
    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
      type: arrayPie.type,
      data: {
        labels: names, //array dei nomi dei venditori
        datasets: [{
          label: '% of Sales per Month',
          data: values, //array con vendite per venditore
          backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)'
          ],
          borderWidth: 2
        }]
      }
    });
  } //chiusura if
} //funzione per creare secondo grafico a torta

function getDataLine() {

  var searchParams = new URLSearchParams(new URL(location.href).search);
  var level = searchParams.get('level');

  if(!level) {
    level = 'guest';
  }

  $.ajax({
    url: 'database.php',
    method: 'GET',
    data: { 'level': level },
    success: function(data) {
      getChart(data);
    },
    error: function(error) {
      console.log('Errore', error);
    }
  });
} //funzione per prendere dati grafico a linea

function getDataPie() {

  var searchParams = new URLSearchParams(new URL(location.href).search);
  var level = searchParams.get('level');

  if(!level) {
    level = 'guest';
  }

  $.ajax({
    url: 'database1.php',
    method: 'GET',
    data: { 'level': level },
    success: function(data) {
      getChartPie(data)
    },
    error: function(error) {
      alert('Errore');
    }
  });
} //funzione per prendre dati grafico a torta

function getDataLine2() {

  var searchParams = new URLSearchParams(new URL(location.href).search);
  var level = searchParams.get('level');

  if(!level) {
    level = 'guest';
  }
  
  $.ajax({
    url: 'database2.php',
    method: 'GET',
    data: { 'level': level },
    success: function(data) {
      getChart2(data);
    },
    error: function(error) {
      alert('Errore');
    }
  });
} //funzione per prendere dati secondo grafico a linea
