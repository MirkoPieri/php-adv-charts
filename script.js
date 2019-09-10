function init() {
  moment.locale('it');
  getData();
}

$(document).ready(init);


function get_Moment() {
  var month = moment.months('MMMM');
  return month;
}

function getChart(data) {

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
      data: {
          labels:  get_Moment(),
          datasets: [{
              label: 'Vendite',
              data: data,
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

}

function getData() {

  $.ajax({
    url: 'fulldb.php',
    method: 'GET',
    success: function(data) {
      getChart(data)
    },
    error: function(error) {
      alert('Errore');
    }
  });
}
