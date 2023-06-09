const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

const createProfile = async (req, res) => {
    try {
      console.log(req.body)
      const profile = new Profile(req.body);
      await profile.save();
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getProfiles = async (req, res) => {
    try {
      const profiles = await Profile.find();
      res.status(200).json(profiles);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getProfileById = async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.id);
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const updateProfile = async (req, res) => {
    try {
      const profile = await Profile.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.json(profile);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const deleteProfile = async (req, res) => {
    try {
      const profile = await Profile.findByIdAndDelete(req.params.id);
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports={createProfile,getProfiles,getProfileById,deleteProfile,updateProfile}