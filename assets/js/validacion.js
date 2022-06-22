//Haz tú validación en javascript acá
/*
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
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