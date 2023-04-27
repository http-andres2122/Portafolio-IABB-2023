export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    };
    console.log(input);

    if(input.validity.valid){
        console.log("y")
    }
};

const validadores = {
    nombre: console.log(2),
    correo: console.log (3)
}

