const express=require('express')
const mongoose=require('mongoose')
const router= new express.Router()
require('../models/userm')
const bodyparser=require('body-parser')

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())
const User=mongoose.model('User')

router.post('/register', async(req,res)=>{
    const user = new User(req.body)
    console.log(req.body.email)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(404).send(e)
    }
})

module.exports=router




