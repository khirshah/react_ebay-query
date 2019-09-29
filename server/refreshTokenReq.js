//---------------------- INIT ---------------------------------
const axios = require('axios');
require('dotenv').config();

//------------------- http request ----------------------------
function httpReq() {
  axios({
    url: "https://api.ebay.com/identity/v1/oauth2/token",
    method: "post",
    headers: {
      "Content-Type" : 'application/x-www-form-urlencoded',
      "Authorization" : `Basic ${process.env.ENCODEDCREDS}`
    },
    data: {
      `grant_type=authorization_code&code": 'v%5E1.1%23i%5E1%23p%5E3%23I%5E3%23f%5E0%23r%5E1%23t%5EUl41XzM6Mzg1RDRBMzk0RjJGQTA5REFEMTI3MTU5QjNEQzdCQ0JfMl8xI0VeMjYw',
      "redirect_uri": 'Agnes_Meri-AgnesMer-testse-bdsgplco`
    }
  }).then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
}

httpReq();