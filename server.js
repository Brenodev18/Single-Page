//-----------Importar as bibliotecas------------

// Carregar as variaveis do arquivo .env
require("dotenv").config()

//Importa o Express
const express = require("express");
// Importa o CORS
const cors = require("cors");

//-----------------------------------------------

//Criar a aplicação utilizando o express
const app = express();

// Permitir receber os dados JSON
app.use(express.json());

//Habilita o CORS
app.use(cors());

//----------------------------------------------

//Servir os arquivos estaticos
app.use(express.static("public"));

//---------------------------------------------


//--------------------------------------------------------------

//Iniciar o Servidor na porta 3000 
const port = process.env.port || 5000
app.listen(port,function(){
    //Exibir menssagem de servidor ativo 
console.log(`Servidor esta rodando em http://localhost:${port}`);
});