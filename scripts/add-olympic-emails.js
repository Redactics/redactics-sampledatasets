var fs = require('fs'); 
const csv = require('csv-parser');
var results = [];

fs.createReadStream('../source-data/athletes.csv')
  .pipe(csv())
  .on('data', (data) => {
    data['Email'] = data['Name'].replace(/\s/g,'').toLowerCase() + '@olympics.com';
    results.push(data)
  })
  .on('end', () => {
    var finalCSV = "";
    results.map(r => {
      finalCSV += r['Name'] + "," + r['NOC'] + "," + r['Discipline'] + "," + r['Email'] + "\n";
    })
    fs.writeFileSync('../2020-olympic-athletes/athletes.csv', finalCSV)
  });