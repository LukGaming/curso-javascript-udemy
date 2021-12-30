function calculaImc(peso, altura) {
    if (arguments.length < 2) {
        throw Error("Essa função espera dois Perametros");
    }
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number") {
            throw Error("Essa função espera somente números");
        }
    }
    return (peso / altura).toFixed(1);
}
function classificaImc(imc) {
    
    switch (imc) {
        case 35.5:
            return "35"
            break;
        // case imc < 18.5:
        //     return "MENOR QUE 18,5 , MAGREZA";
        //     break;
        // case imc >= 18.5 && imc <= 24.9:
        //     return "ENTRE 18,5 E 24,9, NORMAL";
        //     break;
        // case imc >= 25 && imc <= 29.9:
        //     return "ENTRE 25 E 24,9 , SOBREPESO, OBESIDADE GRAU 1";
        //     break;
        // case imc >= 30 , imc <= 39.9:
        //     console.log("aqui estamos");
        //     return "ENTRE 30 E 39,9 , OBESIDADE,  OBESIDADE GRAU 2"
        //     break;
        //     case imc >= 30 && imc <= 39.9:
        //     return "ENTRE 30 E 39,9 , OBESIDADE, OBESIDADE GRAU 3"
        //     break;
        //     case imc > 40:
        //     return "OBESIDADE GRAVE"
        //     break;
        
    }
}
var imc = calculaImc(65,1.83)
console.log(imc)
console.log(classificaImc(imc));