const express = require('express');
const router = express.Router();
const { Client, Environment, ApiError } = require('square')
require('dotenv').config();


const client = new Client({
    accessToken: process.env.SANDBOX_ACCESS_TOKEN,
    environment: Environment.Sandbox

    // accessToken: process.env.PRODUCTION_ACCESS_TOKEN,
    // environment: Environment.Production
    

    
});

      router.post('/intent', async (req, res) =>{
        try {
            const response = await client.checkoutApi.createPaymentLink({
              quickPay: {
                name: 'req.body.name',
                priceMoney: {
                  amount: req.body.amount,
                  currency: 'USD'    //Sandbox
                //   currency: 'NGN'   //Production
                },
                locationId: 'L1XZC8RFCVJRY' //Sandbox
                // locationId: 'LM08GXRD4AJZ0'    //Production
              }
              
            });
            
            res.json({response:response.result.paymentLink.url})

            // res.json(response.result.paymentLink.url)
            console.log(response.result);
          } catch(error) {
            console.log(error);
          }
    })


module.exports = router;