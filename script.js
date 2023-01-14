

function encriptar() {
    var encriptarTexto = document.getElementById("textoEncriptar").value.toLowerCase();/*el document.getElementById("id") selecciona un elemnto por medio del ID
    le ponemos value para que con el valor del ID lo convierta todo en minuscula (toLowerCase())*/


    //la letra i la usamos para que afecte tanto mayusculas como a minusculas
    // la letra g es para toda la linea
    //la letra m es para que afecte multiples lineas
    var descifrado = encriptarTexto.replace(/e/igm, "enter"); /* en encriptarTexto cuando encuentre /e/ (entre// para reemplace todas las letras (e) que encuentre) reemplazarlo por */
    var descifrado = descifrado.replace(/o/igm, "ober");//cambiamos encriptarTexto por descifrado ya que en el primero cambia a descifrado y ya sigue endescifrado
    var descifrado = descifrado.replace(/i/igm, "imes");
    var descifrado = descifrado.replace(/a/igm, "ai");
    var descifrado = descifrado.replace(/u/igm, "ufat");

    document.getElementById("muñeco").style.display = "none"; // cuando toque el boton desaperece la imagen
    document.getElementById("texto-titulo").style.display = "none"; 
    document.getElementById("texto2").innerHTML = descifrado; //con el innerHTML recibimos la respuesta del ID (descifrado) en el texto2
    document.getElementById("copiar").style.display = "show"; // show lo usamos para mostrar
    document.getElementById("copiar").style.display = "inherit";


}

function desencriptar() {

    var encriptarTexto = document.getElementById("textoEncriptar").value.toLowerCase();/*el document.getElementById("id") selecciona un elemnto por medio del ID
    le ponemos value para que con el valor del ID lo convierta todo en minuscula (toLowerCase())*/

    //se invierte primero es el nombre y despues la letra
    var descifrado = encriptarTexto.replace(/enter/igm, "e"); 
    var descifrado = descifrado.replace(/ober/igm, "o");//cambiamos encriptarTexto por descifrado ya que en el primero cambia a descifrado y ya sigue endescifrado
    var descifrado = descifrado.replace(/imes/igm, "i");
    var descifrado = descifrado.replace(/ai/igm, "a");
    var descifrado = descifrado.replace(/ufat/igm, "u");

    document.getElementById("muñeco").style.display = "none"; // cuando toque el boton desaperece la imagen
    document.getElementById("texto-titulo").style.display = "none"; 
    document.getElementById("texto2").innerHTML = descifrado; //con el innerHTML recibimos la respuesta del ID (descifrado) en el texto2
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    // Get the text field
    var copyText = document.getElementById("texto2");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("MENSAJE COPIADO: " + copyText.value);


}

