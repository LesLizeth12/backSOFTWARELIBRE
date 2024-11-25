
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const userController=require('./controllers/userController');
const rolController=require('./controllers/rolController');
const app =express();
app.use(express.json());
app.use(helmet());
app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
})



app.use('/api/users',userController);
app.use('/api/rols',rolController);
const port=process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send('HOLA MUNDOOOOOOOOOOOOOOOO');
})

app.listen(port,()=>{
    console.log(`servidor corriendo en http://localhost:${port}`); //AltGr+cierre de llave=comilla simple al reves
})
