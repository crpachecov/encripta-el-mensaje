let inputArea = document.getElementById("input");

let buttonEncrypt = document.getElementById("encriptar");
let buttonDesencrypt = document.getElementById("desencriptar");
let buttonCopy = document.getElementById("copiar");

let title = document.getElementById("title");
let textEncrypted = document.getElementById("text");

let containerImg = document.getElementsByClassName("img__container");

function encryptText() {
    let text = inputArea.value;
    let textDefault = "Ingresa el texto que desees encriptar o desencriptar.";

    if (text != "") {
        title.style.display = "none";
        containerImg[0].style.display = "none";
        buttonCopy.style.display = "block";
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");
        textEncrypted.innerHTML = text;
    } else {
        title.style.display = "block";
        containerImg[0].style.display = "block";
        buttonCopy.style.display = "none";
        textEncrypted.innerHTML = textDefault;
    }
}

function desencryptText() {
    let text = inputArea.value;
    let textDefault = "Ingresa el texto que desees encriptar o desencriptar.";

    if (text != "") {
        title.style.display = "none";
        containerImg[0].style.display = "none";
        buttonCopy.style.display = "block";
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");
        textEncrypted.innerHTML = text;
    } else {
        title.style.display = "block";
        buttonCopy.style.display = "none";
        containerImg[0].style.display = "block";
        textEncrypted.innerHTML = textDefault;
    }
}


buttonCopy.addEventListener("click", () => {
    // Usa navigator.clipboard.writeText para escribir el contenido de la etiqueta P en el portapapeles
    navigator.clipboard.writeText(textEncrypted.innerText).then(() => {
        console.log("Texto copiado al portapapeles");
    }, (err) => {
        console.error("Error al copiar el texto: ", err);
    });
});

buttonEncrypt.addEventListener("click", encryptText);
buttonDesencrypt.addEventListener("click", desencryptText);
