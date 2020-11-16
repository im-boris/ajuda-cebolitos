const path = require('path');
const express = require('express');
const server = express();

server.use(express.static('frontend'));
server.use(express.static('node_modules/angular'));

module.exports = {

    iniciar(porta){
        
        server.get('/chamados',function(req,res){
            res.sendFile(path.join(__dirname,'/../frontend/aplicativo-chamados/chamados.html'));
        });
        
        server.listen(porta);
        console.log(`[APP WEB] - http://localhost:${porta}/chamados`);
    }

}