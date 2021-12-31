function calculaImc(peso, altura) {
    if (arguments.length < 2) {
        throw Error("Essa função espera dois Perametros");
    }
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number") {
            throw Error("Essa função espera somente números");
        }
    }
    return (peso / (altura * altura)).toFixed(1);
}
function classificaImc(imc) {

    if (imc <= 18.5) {
        return "MENOR QUE 18,5 , MAGREZA";

    } else if (imc <= 24) {

        return "ENTRE 18,5 E 24,9, NORMAL";

    } else if (imc <= 29.9) {
        return "ENTRE 25 E 24,9 , SOBREPESO, OBESIDADE GRAU 1";

    } else if (imc <= 39.9) {
        console.log("aqui estamos");
        return "ENTRE 30 E 39,9 , OBESIDADE,  OBESIDADE GRAU 2"

    } else if (imc <= 39.9) {
        return "ENTRE 30 E 39,9 , OBESIDADE, OBESIDADE GRAU 3"

    } else {
        return "OBESIDADE GRAVE"


    }
}
var imc = calculaImc(65, 1.83)
console.log(imc)
console.log(classificaImc(imc));