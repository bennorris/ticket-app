var sortList = function() {
  $.get('/all_tickets.json', function(data) {
    allData = data;
  })

  $(document).on('click', '#date-button', (function() {
      $('.ticket-row-content').html('');
      allTickets = allData.sort(function(a,b) {
        return Date.parse(a.date) - Date.parse(b.date);
      })
      for (var i=0; i < allTickets.length; i++) {
        console.log(allTickets[i].date.split('-')[0]);
        $('#all-tickets-table').append(`<tr class="ticket-row-content"><td>${allTickets[i].client.name}</td><td>${allTickets[i].employee.name}</td><td>${allTickets[i].date}</td><td>${allTickets[i].total_time}</td><td>${allTickets[i].work_type}</td><td>${allTickets[i].work}</td></tr>`);
      }
  }))

  $(document).on('click', '#client-button', (function() {
      $('.ticket-row-content').html('');
      allTickets = allData.sort(function(a,b) {
        if (a.client.name > b.client.name) {
          return 1;
        } else if (a.client.name < b.client.name) {
          return -1;
        } else {
          return 0;
        }
      })

      for (var i=0; i < allTickets.length; i++) {
        $('#all-tickets-table').append(`<tr class="ticket-row-content"><td>${allTickets[i].client.name}</td><td>${allTickets[i].employee.name}</td><td>${allTickets[i].date}</td><td>${allTickets[i].total_time}</td><td>${allTickets[i].work_type}</td><td>${allTickets[i].work}</td></tr>`);
      }
  }))

  $(document).on('click', '#employee-button', (function() {
      $('.ticket-row-content').html('');
      allTickets = allData.sort(function(a,b) {
          if (a.employee.name > b.employee.name) {
            return 1;
          } else if (a.employee.name < b.employee.name) {
            return -1;
          } else {
            return 0;
          }
       })

      for (var i=0; i < allTickets.length; i++) {
        $('#all-tickets-table').append(`<tr class="ticket-row-content"><td>${allTickets[i].client.name}</td><td>${allTickets[i].employee.name}</td><td>${allTickets[i].date}</td><td>${allTickets[i].total_time}</td><td>${allTickets[i].work_type}</td><td>${allTickets[i].work}</td></tr>`);
      }
  }));
}
