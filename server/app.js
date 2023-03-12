const dotenv=require("dotenv");
const mongoose =require('mongoose');
var cors = require('cors')

const express=require('express');
const app=express();
const router=require('express').Router();
dotenv.config({path :'./.env'});
require('./config/dbconnect')
app.use(express.urlencoded({ extended :false}));
app.use(express.json())

app.use(cors());



const user_routes=require('./routes/mainuser.js');
const employee_routes=require('./routes/employee.js');
const jobpost_routes=require('./routes/jobpost.js');
app.use(user_routes);
app.use(employee_routes);
app.use(jobpost_routes);
// app.use(user_auth);
//router.post("/signup",register)
const port =process.env.port;

/// middleware
// const middleware=(req,res,next)=>
// {
//     console.log(`hello my middle ware`);
//     next();
// }

// app.get('/send-sms',(req,res)=>
// {
// // Download the helper library from https://www.twilio.com/docs/node/install
//                      // Find your Account SID and Auth Token in Account Info
//                      // and set the environment variables. See http://twil.io/secure
//                      const accountSid = process.env.TWILIO_ACCOUNT_SID;
//                      const authToken = process.env.TWILIO_TOKEN;
//                      const client = require('twilio')(accountSid, authToken);

//                      client.messages 
//                       .create({body: 'Hi vro how are you', from: '+12058275730', to: '+919726976891'})
//                       .then(message => console.log(message.sid));
                    
// })


//     const {recipient , textmessage}=req.query
//     client.messages.create({
//         body:"message i hello",
//         to:'+99512246617',
//         from: '+12058275730'
//     }).then((message)=>console.log(message.body))
//     console.log("sms send sucessfully");    
// });
// app.get('/', (req,res)=>{
// res.send(`hello world from the app.js server`) 
// });
// app.get('/signup',middleware,(req,res)=>{
//     res.send(`hello world from the server`) 
//     });
app.listen(port,()=>{
console.log(`server is running on ${port} port`);
})
console.log("moanan")