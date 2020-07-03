const fileSelector = document.getElementById('file-selector')
const output = document.getElementById('output')

fileSelector.addEventListener('change', function() { 
              
    var reader = new FileReader();

    reader.onload = function(){

        var name = []
        var score = []

        output.textContent = reader.result.split('START POINTS')[1];
        output.textContent = output.textContent.substring(0, output.textContent.indexOf("STOP POINTS"));
        
        data = output.textContent.split('\n')

        for (var i = 0; i < data.length; i ++) {

            name.push(data[i].split(' ')[0]);
            score.push(data[i].split(' ')[1]);

        };
        
        console.log(name);
        console.log(score);

    }
            
    reader.readAsText(this.files[0]);

})

// var tabulate = function (data,columns) {

//     var table = d3.select('body').append('table')
//     var thead = table.append('thead')
//     var tbody = table.append('tbody')

//     var selection = d3.selectAll('table')
//     selection.attr('class', 'dataTable')

//     thead.append('tr')
//     .selectAll('th')
//         .data(columns)
//         .enter()
//     .append('th')
//         .text(function (d) { return d })

//     var rows = tbody.selectAll('tr')
//         .data(data)
//         .enter()
//     .append('tr')

//     var cells = rows.selectAll('td')
//         .data(function(row) {
//             return columns.map(function (column) {
//                 return { column: column, value: row[column] }
//         })
//     })
//     .enter()
//     .append('td')
//     .text(function (d) { return d.value })

// return table;
// }

// var url = 'https://gist.githubusercontent.com/yahtzee-tourneys/418f01e9db9d70bc3cc5786fe15e266d/raw/8b12bee1673b64c53d415bced1e92912bb6866d6/tourney_standing_report.csv';

// d3.csv(url,function (data) {
//     var columns = ['Name','Wins','Losses','Byes','DQed']
// tabulate(data,columns)
// })
