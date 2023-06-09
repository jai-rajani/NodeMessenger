const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true,

  },
  age: {
    type: Number,
    required: true,
  },
  bio:{
    type:String,
    required:false,
  },
  posts:[
    { 
        postID:{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}
    },
  ]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;