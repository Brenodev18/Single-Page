///// Importar bibliotecas /////

// importa o express
const express = require("express");

// importa o mysql2
const mysql2 = require("mysql2")

// importa o cors
const cors = require("cors")

////////////////////////////////////////////

////// Criar a aplicação utilizando o express //////
const app = express();

// Permitir receber os dados json
app.use(express.json());

// habilita o cors
app.use(cors());

// Servir o arquivos estaticos
app.use(express.static("public"));

/////////////////////////////////////////////

////// Conexão com o banco de dados //////
const db = mysql2.createConnection({
    // Endereço do servidor
    host:"localhost",
    // Usuario do banco de dados
    user:"root",
    // Senha do banco
    password:"root",
    // nome do banco de dados
    database:"atividade_single_page"
})

// testar conexão
db.connect(function(erro){
    // verifica o erro
    if(erro){
        // exibe o erro no terminal
        console.log("Erro ao conectar ao banco:", erro)
        return;
    }
    // Exibe mensagem de sucesso
    console.log("conectado ao banco de dados!!")
})

//////////////////////////////////////////////


// Iniciar o servidor na porta 3000
app.listen(3000, function(){
    // Exibir mensagem de servidor ativo
    console.log("servidor rodando")
})