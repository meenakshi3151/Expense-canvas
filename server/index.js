const express=require('express')
const cors=require('cors')
const app=express()
const {db} =require('./db/db')
const fs=require('fs')

const routeFiles = fs.readdirSync('./routes');
require('dotenv').config()
const PORT=process.env.PORT

app.use(express.json())
app.use(cors())



routeFiles.forEach((route) => {
  app.use('/api/v1', require(`./routes/${route}`));
});
const server=()=>{
    db()
    app.listen(PORT,()=>{
        console.log('listening to port',PORT)
    })
  }
server()