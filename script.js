function init() {
  moment.locale('it');
  getDataLine();
  getDataPie();
} //funzione principale

$(document).ready(init);


function get_Moment() {
  var month = moment.months('MMMM');
  return month;
} //funzione per mesi dell'anno

function getChart(data) {

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: data.type,
      data: {
          labels:  get_Moment(),
          datasets: [{
              label: 'Vendite',
              data: data.data,
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

} //funzione creare primo grafico a linea

function getChartPie(data) {
  var ctx = document.getElementById('myChart1');
  var myChart = new Chart(ctx, {
    type: data[0],
    data: {
      labels: data[1], //array dei nomi dei venditori
      datasets: [{
        label: '% of Sales per Month',
        data: data[2], //array con vendite per venditore
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
} //funzione per creare secondo grafico a torta

function getDataLine() {

  $.ajax({
    url: 'database.php',
    method: 'GET',
    success: function(data) {
      getChart(data);
    },
    error: function(error) {
      alert('Errore');
    }
  });
} //funzione per prendere dati grafico a linea

function getDataPie() {

  $.ajax({
    url: 'database1.php',
    method: 'GET',
    success: function(data) {
      getChartPie(data)
    },
    error: function(error) {
      alert('Errore');
    }
  });
} //funzione per prendre dati grafico a torta
