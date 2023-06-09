const express=require('express')
require('dotenv').config();
var bodyParser = require('body-parser')
const dotenv=require('dotenv')
const http = require('http');

const app=express()
const mongoose=require('mongoose')

const profileRoutes=require('./routes/profileroutes')
const messageRoutes=require('./routes/messageRoutes')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


dotenv.config();  

const MONGO_URI = process.env.MONGO_URI;


app.get('/',(req,res)=>{
   console.log(req.body)
   res.json({mssg:'Welcome to the app',request:req.body})
})

app.use('/api/user',profileRoutes);
app.use('/api/message',messageRoutes)

io.on('connection', (socket) => {
    console.log('a user connected');
  });

mongoose.connect(MONGO_URI)
    .then(()=>{
        
    app.listen(process.env.PORT,()=>{
        console.log('Listening on port 4000')
    })

    })
    .catch((error)=>{
        console.log(error)
    })

