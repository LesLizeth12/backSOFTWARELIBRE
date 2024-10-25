const express = require('express');
const userController=require('./controllers/userController');

require('dotenv').config();
const app =express();
app.use(express.json());
app.use('/api/users',userController);
const port=3000;

app.get('/',(req,res)=>{
    res.send('HOLA MUNDOOOOOOOOOOOOOOOO');
})

app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`); //AltGR+cierre de llave=comilla simple al reves
})
