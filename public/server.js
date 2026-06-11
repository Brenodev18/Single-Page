// Importar bibliotecas

const express = require("express");

// Criar a aplicação utilizando o express

const app = express();

// Servir o arquivos estaticos

app.use(express.static("public"));

// Iniciar o servidor na porta 3000

app.listen(3000, function(){
    // Exibir mensagem de servidor ativo
    console.log("servidor rodando")
})