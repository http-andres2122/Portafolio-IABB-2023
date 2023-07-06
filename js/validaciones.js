export function valida(input) {
    const tipoDeInput = input.dataset.contacto;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
// console.log(input.parentElement);
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
    nombre: {
        valueMissing: "verifica el nombre",
    },
    correo: {
        valueMissing: "verica el correo",
        typeMismatch: "El correo no es valido",
    },
    asunto: {
        valueMissing: "verifica el asunto",
    },
    msj: {
        valueMissing: "verifica el mensaje",
    },
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( (error) => {
        if(input.validity[error]) {
        // console.log(error);
        // console.log(input.validity[error]);
        // console.log(mensajeDeError[tipoDeInput][error]);
        mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje
}


const validadores = {
    
}

