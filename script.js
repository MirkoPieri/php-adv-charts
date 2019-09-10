function init() {
  moment.locale('it');
  getData();
}

$(document).ready(init);


function get_Moment() {
  var month = moment.months('MMMM');
  return month;
}

function getChart(char1) {

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: char1.type,
      data: {
          labels:  get_Moment(),
          datasets: [{
              label: 'Vendite',
              data: char1.data,
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
    url: 'database.php',
    method: 'GET',
    success: function(data) {
      var char1 = data.fatturato;
      var char2 = data.fatturato_by_agent;
      getChart(char1);
      getCharPie(char2);
      console.log(char2);
    },
    error: function(error) {
      alert('Errore');
    }
  });
}
