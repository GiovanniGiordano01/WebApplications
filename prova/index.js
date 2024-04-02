import express from 'express'
import morgan from 'morgan'
'use strict'
const app=express();
app.use('morgan');
app.listen(3000,()=>{console.log('application started!')});
app.get('/', (req,res)=> {res.send("Hello there")});