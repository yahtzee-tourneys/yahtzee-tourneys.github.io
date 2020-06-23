var tabulate = function (data,columns) {
    var table = d3.select('body').append('table')
      var thead = table.append('thead')
      var tbody = table.append('tbody')
  
      thead.append('tr')
        .selectAll('th')
          .data(columns)
          .enter()
        .append('th')
          .text(function (d) { return d })
  
      var rows = tbody.selectAll('tr')
          .data(data)
          .enter()
        .append('tr')
  
      var cells = rows.selectAll('td')
          .data(function(row) {
              return columns.map(function (column) {
                  return { column: column, value: row[column] }
            })
        })
        .enter()
      .append('td')
        .text(function (d) { return d.value })
  
    return table;
  }

  var url = 'https://gist.githubusercontent.com/yahtzee-tourneys/418f01e9db9d70bc3cc5786fe15e266d/raw/8b12bee1673b64c53d415bced1e92912bb6866d6/tourney_standing_report.csv';
  
  d3.csv(url,function (data) {
      var columns = ['Name','Wins','Losses','Byes','DQed']
    tabulate(data,columns)
  })
