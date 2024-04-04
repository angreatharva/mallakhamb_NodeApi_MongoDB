const express=require("express");
const bodyParser = require("body-parser");
const userRouter = require('./routers/user.route');
const teamRouter =require('./routers/team.route')

const app= express(); 

app.use(bodyParser.json());

app.use('/',userRouter);

app.use('/',teamRouter);



module.exports = app;