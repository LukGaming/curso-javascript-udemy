function calculaMedia() {
    //Caso não for passados parametros para a função, retornar zero
    console.log(arguments)
    if (arguments.length == 0) {
        return 0;
    }
    var soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != 'number') {
            throw Error( "Esta função recebe somente números");
        }
        else{
            soma += arguments[i];
        }
    }
    return soma / arguments.length;
    
}
console.log(calculaMedia(2, 3, 1,49,1231321,2151))