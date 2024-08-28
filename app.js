function criptografarMensagem() {
    let textoInput = document.querySelector("textarea").value;
    const alfabeto = [];
    for (let i = 97; i <= 122; i++) {
        alfabeto.push(String.fromCharCode(i));
    }

    let mensagemCriptografada = "";

    for (let i = 0; i < textoInput.length; i++) {
        let caractere = textoInput[i];
        let index = alfabeto.indexOf(caractere);

        if (index !== -1) {
            let novoIndex = (index + 3) % alfabeto.length;
            mensagemCriptografada += alfabeto[novoIndex];
        } else {
            mensagemCriptografada += caractere; 
        }
    }
    const elementoMensagem = document.querySelector('.resultado_criptografia');
    const aparecer = mensagemCriptografada;
    elementoMensagem.textContent = aparecer;
    
    console.log(mensagemCriptografada);
}

function descriptografarMensagem(){
    let textoInput = document.querySelector("textarea").value;
    const alfabeto = [];
    for (let i = 97; i <= 122; i++) {
        alfabeto.push(String.fromCharCode(i));
    }

    let mensagemDescriptografada = "";

    for (let i = 0; i < textoInput.length; i++) {
        let caractere = textoInput[i];
        let index = alfabeto.indexOf(caractere);

        if (index !== -1) {
            let novoIndex = (index - 3 + alfabeto.length) % alfabeto.length;
            mensagemDescriptografada += alfabeto[novoIndex];
        } else {
            mensagemDescriptografada += caractere; 
        }
    }

    const elementoMensagem = document.querySelector('.resultado_criptografia').textContent = mensagemDescriptografada;
    const aparecer = mensagemDescriptografada;
    elementoMensagem.textContent = aparecer;
    
    console.log(mensagemDescriptografada);
}


function resultadoNaTela(){
    document.getElementById("desaparecer").style.display = "none";
}
function telaInicial(){
    document.getElementById("aparecer").style.display = "inline";
}

