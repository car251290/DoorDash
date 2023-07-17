import {DoorDashClient} from '@doordash/sdk'
import {v4 as uuidv4} from "uuid";
import "dotenv/config"

const DoorDashClient = require('@doordash/sdk')
const client = new DoorDashClient.DoorDashClient(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImRkLXZlciI6IkRELUpXVC1WMSJ9.eyJhdWQiOiJkb29yZGFzaCIsImV4cCI6MTY4ODY3MTQ0OCwiaWF0IjoxNjg4NjY5NjQ4LCJpc3MiOiI2MDdhMTgyMC01MjMwLTRiN2YtOGZiZC0wNzZmMWI0MDJhNDgiLCJraWQiOiJkNTlhZjU1ZC1mNGMzLTRhZTgtODE1MC00ZDY4NDc3YzcyZWMifQ.oBwbBsRsVMUl62ubJtDajNyEUetH_U536635JHjUafc`)
const res = client
  .getDelivery('D-12345')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })

  console.log(res)
