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
        `grant_type=refresh_token&refresh_token=${process.env.REFRESHTOKEN}&scope=${process.env.SCOPE}`
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