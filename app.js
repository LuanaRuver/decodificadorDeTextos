function desabilitarPainel (tag) {
    let campo = document.getElementById(tag);
    campo.style.visibility = "hidden";
}

function habilitarBotao (tag) {
    let campo = document.getElementById(tag);
    campo.style.visibility = "visible";
}
function exibirTexto (tag, texto) {
    let campo = document.getElementById(tag)
    campo.innerHTML= texto;
}

function criptografar() {
    let texto = document.querySelector('textarea').value;
    let arrayVogais = ["a", "e", "i", "o", "u"]
    let arraySubstituicao = ["ai", "enter", "imes", "ober", "ufat"]
    let x = 0;
    let y = 0;
    let textoCripto = "";
    
    while (y < texto.length) { 
        if (texto[y] == arrayVogais[x]) {
            textoCripto = textoCripto + arraySubstituicao[x]
            y++
            x = 0;
        } else {
            x++
        } if (x >= arrayVogais.length) {         
            textoCripto = textoCripto + texto[y]
            x = 0;
            y++;
        }   
    }
    desabilitarPainel("1");
    habilitarBotao("2");
    exibirTexto("texto__crip", textoCripto);
    console.log(textoCripto);
}

function descriptografar () {
    let texto = document.querySelector('textarea').value;
    let arrayVogais = ["a", "e", "i", "o", "u"]
    let arraySubstituicao = ["ai", "enter", "imes", "ober", "ufat"]
    let textoDescripto = texto;
     
    for (let x = 0; x < arraySubstituicao.length; x++) {
        let textoEncontrado = textoDescripto.indexOf(arraySubstituicao[x]);
        while (textoEncontrado >= 0) {
            textoDescripto = textoDescripto.replace(arraySubstituicao[x],arrayVogais[x]);
            textoEncontrado = textoDescripto.indexOf(arraySubstituicao[x]);
        }
    }
    desabilitarPainel("1");
    habilitarBotao("2");
    exibirTexto("texto__crip", textoDescripto);
    console.log(textoDescripto);
}

function copiar () {
    let texto = document.getElementById('texto__crip').innerHTML;
    navigator.clipboard.writeText(texto);
}