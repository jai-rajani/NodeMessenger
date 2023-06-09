const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message:{
    type:String,
    required:true,
    maxlength:[100,'Max message length is 100']
  },
  sender:{
    type:mongoose.Schema.Types.ObjectId, ref: 'profiles'
  },
  receiver:{
    type: mongoose.Schema.Types.ObjectId, ref: 'profiles'
  }
},
{timestamps:true});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;