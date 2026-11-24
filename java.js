
function mostrarMensagem() {

    document.getElementById("mensagem").innerHTML =
    "A diversidade faz parte da nossa sociedade. Respeite todas as pessoas!";
    
}

function responder(pergunta, resposta) {

    if (resposta == "certo") {

        document.getElementById("resultado" + pergunta).innerHTML =
        "Parabéns! Você acertou!";

    } else {

        document.getElementById("resultado" + pergunta).innerHTML =
        "Resposta incorreta. Tente novamente!";

    }

}
