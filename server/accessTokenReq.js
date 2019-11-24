//---------------------- INIT ---------------------------------
const axios = require('axios');
require('dotenv').config();

//------------------- http request ----------------------------
function accessTokenReq() {
  return new Promise((resolve,reject) =>{
    axios({
      url: "https://api.ebay.com/identity/v1/oauth2/token",
      method: "post",
      headers: {
        "Content-Type" : 'application/x-www-form-urlencoded',
        "Authorization" : `Basic ${process.env.ENCODEDCREDS}`
      },
      data: 
        `grant_type=client_credentials&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope`
    }).then(
      response => {
        resolve({
          token: response.data.access_token,
          date: Date.now()
        })
      },
      error => {
        console.log(error);
      }
    )
  })
}

module.exports = accessTokenReq;