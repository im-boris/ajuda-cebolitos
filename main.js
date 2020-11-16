const api = require('./backend/api/api');
const servidorWeb = require('./servidorWeb/servidorWeb');

const porta_servidor_web = 5678;
const porta_api = 1234;

api.iniciar(porta_api);
servidorWeb.iniciar(porta_servidor_web);
