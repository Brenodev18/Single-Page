// Carregar as variaveis do arquivo .env
require('dotenv').config()

// Importar a biblioteca mysql2
const mysql = require("mysql2")

// Criar a conexão com o banco de dados
const db = mysql.createConnection({

    //Endereço do servidor
    host: process.env.db_host,
    //Usuario do banco de dados
    user: process.env.db_user,
    //senha do banco de dados
    password: process.env.db_password,
    //Nome do banco de dados
    database: process.env.db_name
})

// Teste de conexão

db.connect(function(erro){

    //Verifica o eroo
    if(erro){
        console.log("Erro ao conectar ao banco", erro)
        return
    }

    //Exibir menssagem de sucesso
    console.log("Conectado ao banco de dados mysql!")
})

// Exportar a conexão
module.exports = db