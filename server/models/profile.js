const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength:[20,'Max name length is 20'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true,
    minlength:[10,'Password should be at least 10 digits'],
    maxlength:[30,'Max password length is 30'],

  },
  age: {
    type: Number,
    required: true,
    min:[18,'You must be 18 to use this app'],
    max:[100,'Please enter  valid age']
  },
  bio:{
    type:String,
    required:false,
    maxlength:[100,'Max bio length is 100'],
  },
  posts:[
    { 
        postID:{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}
    },
  ],
  open:{
    type:Boolean,
    default:true,
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;