const { Router } = require("express");

const { sendMessage } = require("../controllers/messageController");
const router = Router();

router.post('/create', sendMessage);




module.exports=router

