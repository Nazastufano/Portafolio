//Haz tú validación en javascript acá
/*
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("formcontato__input-incorrecto");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("formcontato__input-incorrecto");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
];

const mensajeDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío."
    },
    email:{
        valueMissing: "El campo correo no puede estar vacío.",
        typeMismatch: "El correo no es válido."
    },
    asunto:{
        valueMissing: "El campo asunto no puede estar vacío.",
    }
}


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje
}
*/

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
        break;
        case "asunto":
            validarCampo(expresiones.nombre, e.target, "asunto");
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`formcontacto__${campo}`).classList.remove("formcontato__input-incorrecto");
        campos[campo] = true;
    } else { 
        document.getElementById(`formcontacto__${campo}`).classList.add("formcontato__input-incorrecto");
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if(campos.nombre && campos.email && campos.asunto){
        formulario.reset();
    }
});