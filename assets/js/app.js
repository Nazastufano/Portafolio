import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

const textarea = document.querySelector("textarea");
validarTextarea(textarea);

function validarTextarea(textarea){
    textarea.addEventListener("blur", (textarea) => {
        valida(textarea.target);
    });
}