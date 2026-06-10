console.log("java script carregado com sucesso")

// Selecionar modal
const modalOverlay = document.querySelector('#modalOverlay')

// Selecionar o botão fechar
const btnFechar = document.querySelector('#btnFechar')

// Selecionar os botões detalhe
const botoesDetalhes = document.querySelectorAll('.btnDetalhes')

// Função abrir modal
function abrirModal(){

    modalOverlay.style.display = "flex"
}

                                    // Fechar modal 
function fecharModal(){

    modalOverlay.style.display = "none"

}

// Fechar modal ao clicar fora 
modalOverlay.addEventListener(
        "click",
        

        function(evento){

            // Verifica se o clique foi realizado diretamente no overlay
            if(evento.target===modalOverlay){
                fecharModal()
                
        }
    }
    
)
                                  //////////////////////////         
                                                    
// Adicionar evento ao botão fechar

btnFechar.addEventListener(
    "click",
    fecharModal
)

// Percorrer os botões
botoesDetalhes.forEach(

    function(botao){

        botao.addEventListener(
        "click",

        abrirModal
        );
   
    }

);



