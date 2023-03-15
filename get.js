 import { DoorDashClient } from "@doordash/sdk";
 import "doten/config"

 const client = new DoorDashClient(PASTE_YOUR_ACCESS_KEY_HERE);

 const response = client
 .getDelivery("D-12345")
 .then((response)=> {
    console.log(response.data);
 })
 .catch((err)=> {
    console.log(err);
 })