const express = require('express');
const router = express.Router();

const Message=require('../models/message');

const sendMessage=async(req,res)=>{
    try {
        console.log(req.body)
        const message = new Message(req.body);
        await message.save();
        res.status(200).json(message);
      } catch (error) {
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

module.exports={sendMessage}