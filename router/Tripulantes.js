const express = require('express');
const router = express.Router();

const Tripulante = require('../models/tripulante')

router.get('/', async (req,res) =>{

    try{

        const arrayTripulantesDB = await Tripulante.find()
        console.log(arrayTripulantesDB)

        res.render('tripulantes', {
            arrayTripulantes : arrayTripulantesDB
        })

    } catch (error){
        console.log(error)
    }
})

router.get('/nuevo',(req,res) => {
    res.render('nuevo')
})

router.post('/', async (req,res) =>{
    const body = req.body

    try {
        
        const tripulanteBD = new Tripulante(body)
        await tripulanteBD.save()
        console.log(body)
        res.redirect('tripulantes')

    } catch (error) {
        console.log(error)
    }
    
})


/*
router.get('/',(req,res) =>{
    res.render('tripulantes', {
        arrayTripulantes: [
            {nombre: 'Pedro', edad: 20, email: 'pedro@gmail.com'},
            {nombre: 'Silvia', edad: 17, email: 'silvia.2022@gmail.com'},
            {nombre: 'Jorge', edad: 21, email: 'jorge_10@gmail.com'},
            {nombre: 'Samuel', edad: 22, email: 'pedro@gmail.com'},
            {nombre: 'Maria', edad: 15, email: 'silvia.2022@gmail.com'},
            {nombre: 'Martin', edad: 35, email: 'jorge_10@gmail.com'}
        ]
    })
})
*/

module.exports = router;