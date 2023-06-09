const express = require('express');
const router = express.Router();

const Message=require('../models/message');
const Profile = require('../models/profile');
const { io, sendMessageIO } = require('../socket');

const sendMessage=async(req,res)=>{
    try {
        const {sender,receiver}=req.body;

        //check if receiver has an open profile
        
        const receiver_profile=await Profile.findById(receiver);
      
        if(receiver_profile.open==false){
          res.status(200).json('User profile is private!');
        }
        else{
        const message = new Message(req.body);
        await message.save();
        sendMessageIO(message)
        res.status(200).json(message);
       }} 
      catch (error) {
        res.status(400).json({ error: error.message });
      }
      
    };

const getMessages=async(req,res)=>{
  const { from, to } = req.body;

  const messages = await Message.find({
    sender:from,
    receiver:to,
    
  }).sort({ updatedAt: 1 });
  return res.status(200).json(messages)

}

module.exports={sendMessage,getMessages}