

/*const express =require('express');
require('dotenv').config();

const server = require('http').createServer();
const io = require('socket.io')(server); 

io.on('connection', client => {
    console.log('cliente conectado');
    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });
});


const app=express();
const path =require('path');
const publicPath=path.resolve( __dirname ,'public');
app.use(express.static(publicPath));
app.listen(process.env.PORT,(err)=>{

    if(err) throw new Error(err);

    console.log(`sirve`);
});*/




const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );





server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


