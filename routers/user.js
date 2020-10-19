const express = require('express');
const router = new express.Router()
const User = require('../models/user')
const {TrailBlazersUser} = require('../emails/userAccount')
const cors = require('cors');

router.use(cors());

router.get('/', (req,res) => {
    res.send('Hello World')
})







router.post('/users', async  (req, res) => {
    const user = new User(req.body)
    console.log(user);
 
    try {
        await user.save()
        TrailBlazersUser(user.email, user.name)
        res.json({ result: "success", message: "Register successfully" }) 
    } catch (e) {
       res.status(400).send(e)
    }
 })
 
 




module.exports = router