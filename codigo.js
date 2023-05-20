const mensaje = document.querySelector(".entrada")
const codigo = document.querySelector(".salida");


function btnEncriptar(){
    const textoEncriptado = encriptar(mensaje.value);
    codigo.style.backgroundImage = "none";
    codigo.value = textoEncriptado;
    mensaje.value = "";
    }

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value);
    codigo.value = textoEncriptado;
    mensaje.value = "";
}
function btnCopiar(){
    const textoCopiado =codigo.value;
    codigo.value="";
    mensaje.value=textoCopiado;
    alert("Mensaje copiado correctamente");
}

function encriptar(mensajeEncriptar){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptar = mensajeEncriptar.toLowerCase(); 
    for(let i = 0; i < matriz.length; i++){ 
        if(mensajeEncriptar.includes(matriz[i][0])){ 
            mensajeEncriptar = mensajeEncriptar.replaceAll(matriz[i][0], matriz[i][1]); 
        }
    }
    return mensajeEncriptar;
}

function desencriptar(mensajeEncriptar){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptar = mensajeEncriptar.toLowerCase(); 

    for(let i = 0; i < matriz.length; i++){ 
        if(mensajeEncriptar.includes(matriz[i][0])){ 
            mensajeEncriptar = mensajeEncriptar.replaceAll(matriz[i][1], matriz[i][0]); 
        }
    }
    return mensajeEncriptar;
}
