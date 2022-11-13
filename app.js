/* 
const grupoTri = require('./grupo')
const cowsay = require("cowsay");

grupoTri.forEach(item => {
    console.log(item)
})

console.log(cowsay.say({
    text : "Utilizando cowsay!!",
    e : "oO",
    T : "U "
}));
*/
/*
//Ejecutar en el navegador
const http = require('http');
const server = http.createServer( (req, res) => {
    res.end('Respuesta a su petición 9 - nov, 20:50!!')
} )

//Ejecutar en el servidor node js
const puerto = 3000;
server.listen(puerto, () => {
    console.log('Atento a las peticiones!!')
})
*/
//Ejecutar en el navegador
const express = require('express');
const app = express();
const puerto = 3000;

//configurar el motor de plantillas EJS
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.static(__dirname+"/public"))

//Ejecutar en el navegador o cliente
app.get('/',(req,res)=>{
    res.render('index',{titulo: 'Título dinámico EJS'})
})

app.get('/mintic',(req,res)=>{
    res.send('Respuesta con expres de mintic!!')
})


//Ejecutar en el servidor node js
app.listen(puerto, () => {
    console.log('Atento a las peticiones Express!!')
})

