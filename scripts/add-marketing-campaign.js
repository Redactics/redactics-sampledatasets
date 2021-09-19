var fs = require('fs'); 
const csv = require('csv-parser');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

var results = [];
var headers = [];

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

fs.createReadStream('../source-data/marketing_campaign.csv')
  .pipe(csv())
  .on('headers', (data) => {
    headers.push(data)
  })
  .on('data', (data) => {
    var name = uniqueNamesGenerator({
      dictionaries: [names, names],
      length: 2,
      separator: ' '
    });
    data['First_Name'] = name.split(' ')[0];
    data['Last_Name'] = name.split(' ')[1];
    data['Email'] = name.replace(/\s/g,'').toLowerCase() + '@gmail.com';
    data['Phone'] = getRandomArbitrary(200, 799) + "-" + getRandomArbitrary(200, 999) + "-" + getRandomArbitrary(0, 9999);
    data['Last_Login_IP'] = getRandomArbitrary(1, 255) + "." + getRandomArbitrary(1, 255) + "." + getRandomArbitrary(1, 255) + "." + getRandomArbitrary(1, 255);
    results.push(data)
  })
  .on('end', () => {
    var finalCSV = headers.join(',').toLowerCase() + "\n";
    results.map(r => {
      finalCSV +=  
        r['ID'] + ",\"" + 
        r['First_Name'] + "\",\"" + 
        r['Last_Name'] + "\",\"" + 
        r['Email'] + "\",\"" + 
        r['Phone'] + "\",\"" + 
        r['Last_Login_IP'] + "\",\"" + 
        r['Year_Birth'] + "\",\"" + 
        r['Education'] + "\",\"" + 
        r['Marital_Status'] + "\",\"" + 
        r['Income'] + "\",\"" + 
        r['Kidhome'] + "\",\"" + 
        r['Teenhome'] + "\",\"" + 
        r['Dt_Customer'] + "\",\"" + 
        r['Recency'] + "\",\"" + 
        r['MntWines'] + "\",\"" +
        r['MntFruits'] + "\",\"" +
        r['MntMeatProducts'] + "\",\"" +
        r['MntFishProducts'] + "\",\"" +
        r['MntSweetProducts'] + "\",\"" +
        r['MntGoldProds'] + "\",\"" + 
        r['Recency'] + "\",\"" +
        r['NumDealsPurchases'] + "\",\"" +
        r['NumWebPurchases'] + "\",\"" +
        r['NumWebPurchases'] + "\",\"" +
        r['NumCatalogPurchases'] + "\",\"" +
        r['NumCatalogPurchases'] + "\",\"" +
        r['NumStorePurchases'] + "\",\"" +
        r['NumWebVisitsMonth'] + "\",\"" +
        r['AcceptedCmp3'] + "\",\"" +
        r['AcceptedCmp4'] + "\",\"" +
        r['AcceptedCmp5'] + "\",\"" +
        r['AcceptedCmp1'] + "\",\"" +
        r['AcceptedCmp2'] + "\",\"" +
        r['Complain'] + "\",\"" +
        r['Z_CostContact'] + "\",\"" +
        r['Z_Revenue'] + "\",\"" +
        r['Response'] + "\"" + 
        "\n";
    })
    fs.writeFileSync('../marketing-campaign/marketing_campaign.csv', finalCSV)
  });