
require('dotenv').config();
const express = require('express');
const userController=require('./controllers/userController');
const rolController=require('./controllers/rolController');
const app =express();
app.use(express.json());
app.use('/api/users',userController);
app.use('/api/rols',rolController);
const port=process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send('HOLA MUNDOOOOOOOOOOOOOOOO');
})

app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`); //AltGr+cierre de llave=comilla simple al reves
})
