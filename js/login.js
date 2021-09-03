//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function verificacion() {
    let user = document.getElementById("usuario");
    let password = document.getElementById("contrasenia");
    let data = {};


     if (user.value.trim() === "" && password.value.trim() === "") {
        alert ("Ingresar usuario y contraseña")
    }

    else if (user.value.trim() === "") {
        alert ("Ingresar usuario")
    
    } 
    else if (password.value.trim() === "") {
        alert("Ingresar contraseña")
    }

    else {
        data.usuario = user.value;
        data.contraseña = password.value;

        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        localStorage.setItem("contrasenia", JSON.stringify(data.contrasenia));

        location.href = "inicio.html";
    }

}

function desconectar() {
    localStorage.clear();
    location.href = "index.html";
};

document.addEventListener("DOMContentLoaded", function(e){

});

