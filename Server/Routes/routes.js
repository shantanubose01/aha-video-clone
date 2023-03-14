const express = require('express');
const {newrelease, blockbuster, hollywood} = require('../Models/models');
const passport = require('passport')
const router = express.Router();

//GOOGLE OAUTH
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

  router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    // 
    res.writeHead(302,{
        Location : 'http://localhost:3000/'
    })
    res.send();
  });
//DATA ENDPOINTS
router.get('/newrelease', async(req,res)=>{
    try{
        const data = await newrelease.find();
        res.status(200).send({results : data});
    }
    catch(err){
        res.status(400).send({err : err.message})   
     }
})
router.get('/blockbuster', async(req,res)=>{
    try{
        const data = await blockbuster.find();
        res.status(200).send({results : data});
    }
    catch(err){
        res.status(400).send({err : err.message})   
     }
})
router.get('/hollywood', async(req,res)=>{
    try{
        const data = await hollywood.find();
        res.status(200).send({results : data});
    }
    catch(err){
        res.status(400).send({err : err.message})   
     }
})
router.post('/hollywood', async (req,res)=>{
    await hollywood.insertMany([
       
    ])
    res.status(200).send({message : 'data added'})
})

module.exports = router ;