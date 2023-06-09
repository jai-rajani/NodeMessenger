const { Router } = require("express");

const { sendMessage, getMessages } = require("../controllers/messageController");
const router = Router();

router.post('/create', sendMessage);
router.post('/get',getMessages);




module.exports=router

