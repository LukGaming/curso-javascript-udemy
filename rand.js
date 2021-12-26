function randNumberNotRepeted(quantity, limit) {
    

    if (typeof quantity !== 'number' || typeof limit !== 'number') {
        throw Error("Somente números poderão ser usados nesta funcao");

    }
    else if (typeof quantity === NaN || typeof limit === NaN) {
        throw Error("Somente números poderão ser usados nesta funcao");

    }
    else if (quantity > limit) {
        throw Error("Quantidade Maior que o Limite");
    }
    else {
        var numbers = [];
        while (numbers.length < quantity) {
            let sorteio = randomicNumber(limit);
            if (numbers.indexOf == -1) {

            }
            else {
                numbers.push(sorteio)
            }
        }
        return numbers;
    }


}
function randomicNumber(LimitNumber) {
    return parseInt(Math.random() * LimitNumber);
}

const numbers = randNumberNotRepeted(10, 100)
console.log(numbers)