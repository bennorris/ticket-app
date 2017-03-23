var exportBilling = function() {
  $('#export-button').on('click', function() {
    var correctInput = false;
    var month = $('.month-input').val();
    var year = $('.year-input').val();

    if (month.length != 2 && year.length != 4) {
      window.alert('Please enter the month as two digits (eg., 01 for January) and the year as four digits (eg., 2017 rather than 17)');
    } else if (month.length != 2) {
      window.alert('Please enter the month as two digits (eg., 01 for January');
    } else if (year.length != 4) {
      window.alert('Please enter the year as four digits (eg., 2017 rather than 17)');
    } else {
      correctInput = true;
    }

    if (correctInput == true) {
        var csvContent = 'data:text/csv;charset=utf-8,';
        var timeStamp = new Date();
        for (var i = 0; i < allData.length; i++) {
          if (allData[i].notes == undefined) {
            allData[i].notes = "none";
          }

        if (allData[i].date.split('-')[0] == year && allData[i].date.split('-')[1] == month) {
            var rowToExport = timeStamp + ',' + allData[i].employee.name + ',' + allData[i].client.name + ',' + allData[i].total_time + ',' + allData[i].start_time + ',' + allData[i].date + ',' +
            allData[i].work_type + ',' + allData[i].status + ',' + allData[i].work + ',' + allData[i].notes + '\n';
            csvContent += rowToExport;
          }
      }

        if (csvContent.length > 28) {
          var encodedUri = encodeURI(csvContent);
          var link = document.createElement('a');
          link.setAttribute('href', encodedUri);
          link.setAttribute('download', 'itsyssol-billing.csv');
          document.body.appendChild(link);
          link.click();
        } else {
          alert('Nothing matches that date.');
        };
    }
  })


}
