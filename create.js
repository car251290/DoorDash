import {DoorDashClient} from '@doordash/sdk'
import {v4 as uuidv4} from "uuid";

import "dotenv/config"

const axios = require('axios');
const client = new DoorDashClient({
    developer_id: process.env.DEVELOPER_ID,
    key_id: process.env.KEY_ID,
    signing_secret: process.env.SIGNING_SECRET
});

const response = await client.createDelivery({
    external_delivery_id: uuidv4(),
    pickup_address: '1000 4th Ave, Seattle, WA, 98104',
    pickup_phone_number: '+1(650)5555555',
    dropoff_address: '1201 3rd Ave, Seattle, WA, 98101',
    dropoff_phone_number: '+1(650)5555555',
  })
console.log(response)

// const the jsonToken
const jwt = require('jsonwebtoken')
const accessKey = ``
const data = {
  aud: 'doordash',
  iss: accessKey.developer_id,
  kid: accessKey.key_id,
  exp: Math.floor(Date.now() / 1000 + 300),
  iat: Math.floor(Date.now() / 1000),
}

const headers = { algorithm: 'HS256', header: { 'dd-ver': 'DD-JWT-V1' } }

const token = jwt.sign({
  data,
  value: Buffer.from(accessKey.signing_secret, 'base64'),
  headers,
})
  
console.log(token)

// new update for delivery
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
  .then((res) => {
    if(!res) {
      console.log("response was not found")

    } else {
      console.log(res.data)
    }
   
  })
  .catch((err) => {
    console.log(err)
  })

