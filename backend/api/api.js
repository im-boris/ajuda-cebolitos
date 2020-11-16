const express = require('express');
const api = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

api.use(cors());
api.use(bodyParser.json()); 
api.use(bodyParser.urlencoded({ extended: true })); 

module.exports = {

    iniciar(porta) {

        this.servicos();

        api.listen(porta);
        console.log(`[API] - http://localhost:${porta}/`);
    },

    servicos() {

        // Serviços
        this.obterListaChamados();


    },

    obterListaChamados() {
        
        api.get('/obterListaChamados', (requisicao, resposta) => {

            const diretorio = path.join(__dirname,'/../chamados/');
            const nomeArquivo = "chamados.json";
            const encoding = "utf-8";

            var arquivoJson = fs.readFileSync(diretorio+nomeArquivo, encoding);
            arquivoJson = JSON.parse(arquivoJson);

            return resposta.send(arquivoJson);

        });  

    }
    
}