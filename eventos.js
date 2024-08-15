
function saludo() {
    alert("Hola!");
}

function saludoDiv(){
    alert("Hola! Soy el div");
}

document.getElementById("divSaludo")[0].addEventListenner("click", saludoDiv);

//document.addEventListener("click", saludoDiv);

//function saludoDiv(){
    //document.getElementsById("saludoDiv")[0];

//}



