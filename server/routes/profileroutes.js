const { Router } = require("express");
const {createProfile,getProfiles,getProfileById,updateProfile,deleteProfile} = require('../controllers/profileController')
const router = Router();

router.post('/profile', createProfile);
router.get('/profiles', getProfiles);
router.get('/profiles/:id', getProfileById);
router.put('/updateprofile/:id', updateProfile);
router.delete('/profiles/:id', deleteProfile);



module.exports=router

