var request= require('request');

var  yargs = require('yargs');

var argv = yargs.option({
    year: {
        demand: true,
        describe: "this will take year for race season",
        alias: "y"
    },
    round:{
        demand: true,
        describe: "this will take round number of given year",
        alias: "r"
    }
    }).help()
    .alias('help', 'h')
    .argv;

request({
    uri: `http://ergast.com/api/f1/${argv.year}/${argv.round}/results.json`,
    method: "GET",
    JSON: true
},function (error, response, body){
   // console.log(response);
if(error){
    console.log("some error occured while connecting to server.")
}
else if(response.statusCode == 200){
    var data= JSON.parse(body);
console.log("-----------------------------------------------------------")
console.log(`Race  ::  ${data.MRData.RaceTable.Races[0].raceName}`);
console.log(`Season  ::  ${data.MRData.RaceTable.Races[0].season}`);
console.log(`Circuit  ::  ${data.MRData.RaceTable.Races[0].Circuit.circuitName}`);
console.log(`Location  ::  ${data.MRData.RaceTable.Races[0].Circuit.Location.locality}, ${data.MRData.RaceTable.Races[0].Circuit.Location.country}`);
console.log("-----------------------------------------------------------")
}



});