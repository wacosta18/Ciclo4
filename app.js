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
const bodyParser = require('body-parser')
const app = express();
const puerto = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Conexion a mongoDB
const mongoose = require('mongoose');

const user = "usermongo";
const password = "Mgjwt39t.";
const dbname = "mintic20222";
const uri = `mongodb+srv://${user}:${password}@cluster0.nrsmc13.mongodb.net/${dbname}?retryWrites=true&w=majority`


mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('Conexion a base de datos ok!!'))
    .catch(e => console.log(e))


//configurar el motor de plantillas EJS
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.static(__dirname+"/public"))

//Rutas Web
app.use('/',require('./router/RutasWeb'));
app.use('/tripulantes',require('./router/Tripulantes'));

//Ejecutar en el servidor node js
app.listen(puerto, () => {
    console.log('Atento a las peticiones Express!!')
})

