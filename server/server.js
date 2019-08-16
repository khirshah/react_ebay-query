//---------------------- INIT ---------------------------------
const _ = require('lodash');
require('dotenv').config();
const fetch = require('node-fetch');

//---------------------- express -------------------------
const express = require('express');
const app = express();

//-------------------- body parser -----------------------
const bodyParser = require('body-parser');

//-------------------- async handler ---------------------
const asyncHandler = require('express-async-handler');

//-------------- acces token req module ------------------
var accessTokenReq = require('./accessTokenReq');
var accessTokenData = {};

//----------------- data handler function ----------------

const keyword = "Arkham horror"

function filterData(data) {
  let filteredData = data.itemSummaries.map((i)=>{
    return i.title
  })
  return filteredData;
}
//------------------- server app -------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});
 
app.get('/', (req, res) => {

  res.send('Hello there! Use the /getData endpoint to make queries.');
})

app.post('/getData', asyncHandler(async (req, res, next) => {

  if (_.isEmpty(accessTokenData || accessTokenData.date - Date.now() > (2*60*60*1000))) {
    console.log("requesting user access token")
    accessTokenData = await accessTokenReq();
  }

  fetch(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${req.body.keyword}&limit=5`, {
    headers: {
        Authorization: `Bearer ${accessTokenData.token}`
      }
    }).then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      if (myJson.itemSummaries != undefined) {
        let processedData = filterData(myJson);
        res.send(processedData);
      }
      else {
        res.send();
      }
  });

}));

 
app.listen(process.env.PORT, () => {

  console.log(`app is listening on PORT: ${process.env.PORT}`)

});