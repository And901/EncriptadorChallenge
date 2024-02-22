const campoTexto = document.querySelector("#textoEncriptado");
const campoMensaje = document.querySelector("#textoDesencriptado");
const txtCopy = document.querySelector("#copiado");
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar(){
    const texto = encriptar(campoTexto.value); 
    campoMensaje.value = texto;
    txtCopy.style.display = "none";
}

function btnDesencriptar(){
    const texto = desencriptar(campoTexto.value);
    campoMensaje.value = texto;
    txtCopy.style.display = "none";
}

function btnCopiar(){
    const texto = campoMensaje.value;
    navigator.clipboard.writeText(texto);
    txtCopy.style.display = "block";
}

function encriptar(fraseEncriptada){
    if(verificacion(fraseEncriptada)){
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (fraseEncriptada.includes(matrizCodigo[i][0])) {
                 fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        }
    }else{
        alert("¡El texto no es válido!");
        fraseEncriptada = "";
    }
return fraseEncriptada;
}

function desencriptar(fraseEncriptada){
    if(verificacion(fraseEncriptada)){
        for (let i = 0; i < matrizCodigo.length; i++) {
        if (fraseEncriptada.includes(matrizCodigo[i][1])) {
                fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
        }
    }else{
        alert("¡El texto no es válido!");
        fraseEncriptada = "";
    }
    return fraseEncriptada;
}

function verificacion(fraseEncriptada) {
    const texto = fraseEncriptada;

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);
        if(charCode != 32){
            if (charCode < 97 || charCode > 122){
                return false;
                break;
            }
        }
    }
    return true;
}