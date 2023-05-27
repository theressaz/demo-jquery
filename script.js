$(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault();
  
      var inputNumber = $('#inputNumber').val();
      var inputText = $('#inputText').val();
  
      $.ajax({
        url: 'B.php',
        type: 'POST',
        data: {
          inputNumber: inputNumber,
          inputText: inputText
        },
        dataType: 'json',
        success: function(response) {
          displayTable(response);
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });
    });
  
    function displayTable(data) {
      var tbody = $('#outputTable tbody');
      tbody.empty();
  
      $.each(data, function(index, item) {
        var row = '<tr>' +
                    '<td>' + index + '</td>' +
                    '<td>' + item + '</td>' +
                  '</tr>';
        tbody.append(row);
      });
  
      $('#outputTable').slideDown();
    }
  });  