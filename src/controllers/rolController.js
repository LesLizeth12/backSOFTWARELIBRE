const express = require('express');
const rolService=require('../services/rolService');

const router=express.Router();

//router.get('/User')
//router.post('/User')
//router.get('/User/FindAll',)

router.get('/',async(req,res)=>{
    const rols=await rolService.getAllRols();
    res.json(rols);
});

//router.get('/:id/:parametro') CON PARAMETRO
router.get('/:id/',async(req,res)=>{
    const rol=await rolService.getRolById(req.params.id);
    if(rol){
        res.json(rol);
    }else{
        res.status(404).json({message:'User no found'});
    }
});

router.post('/',async(req,res)=>{
    const newRol=await rolService.createRol(req.body);
    res.status(201).json(newRol);
});

router.put('/:id',async(req,res)=>{
    const updateRol=await rolService.updateRol(req.params.id,req.body);
    if(updateRol)
        res.status(201).json(updateRol);
    else
    res.status(404).json({message:'User not updated'});
});

router.delete('/:id',async(req,res)=>{
    const deletedRol=await rolService.deleteRol(req.params.id);
    if(deletedRol){
        res.status(204).send();
    }else{
        res.status(404).json({message:'User dont delete'});
    }
});

router.get('/users/:rolId',async(req,res)=>{
    try {
        const result=await rolService.getUsersByRole(req.params.rolId);
        res.json(result);
    } catch (error) {
        if(error,message==='Rol not found'){ //=== : evalua tipo de dato
            res.status(404).json({error:error.message});
        }else{
            res.status(500).json({error:error.message});
        }
    }
});



module.exports=router;

/*router.get('/User',async(req,res)=>{
    const users=await UserService.getAllUsers();
    res.json(users);
});*/