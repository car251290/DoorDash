const jwt = require('jsonwebtoken')

const accessKey = {
    "developer_id": "607a1820-5230-4b7f-8fbd-076f1b402a48",
    "key_id": "bfc63c5f-f8d3-4ee7-af0b-5789c939c2e4",
    "signing_secret": "iWb7G7OwdhWYr_wmOIDzuCKsflGLnKNWBzvEe6IdnxQ"
  }

const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 60),
  iat: Math.floor(Date.now() / 1000),
}

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } }

const token = jwt.sign(
  data,
  Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
)

console.log(token)

const axios = require('axios')

const body = JSON.stringify({
  external_delivery_id: 'D-12345',
  pickup_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  pickup_business_name: 'Wells Fargo SF Downtown',
  pickup_phone_number: '+16505555555',
  pickup_instructions: 'Enter gate code 1234 on the callbox.',
  dropoff_address: '901 Market Street 6th Floor San Francisco, CA 94103',
  dropoff_business_name: 'Wells Fargo SF Downtown',
  dropoff_phone_number: '+16505555555',
  dropoff_instructions: 'Enter gate code 1234 on the callbox.',
  order_value: 1999,
})

axios
  .post('https://openapi.doordash.com/drive/v2/deliveries', body, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })

  axios
  .get('https://openapi.doordash.com/drive/v2/deliveries/D-12345', {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
  .then(function (response) {
    console.log(response.data)
  })
  
  .catch(function (error) {
    console.log(error)
  })