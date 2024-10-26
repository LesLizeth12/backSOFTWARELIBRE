const express = require('express');
const userService=require('../services/userService');

const router=express.Router();

//router.get('/User')
//router.post('/User')
//router.get('/User/FindAll',)

router.get('/',async(req,res)=>{
    const users=await userService.getAllUsers();
    res.json(users);
});

module.exports=router;

/*router.get('/User',async(req,res)=>{
    const users=await UserService.getAllUsers();
    res.json(users);
});*/



