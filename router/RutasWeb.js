const express = require('express');
const router = express.Router();

//Ejecutar en el navegador o cliente
router.get('/',(req,res)=>{
    res.render('index',{titulo: 'Título dinámico EJS'})
})

router.get('/mintic',(req,res)=>{
    res.render('Respuesta con expres de mintic!!')
})

module.exports = router;