function randNumberNotRepeted(quantity, limit) {
    if(quantity > limit){
        return "Quantidade Maior que o Limite";
    }
    var numbers = [];
    while (numbers.length < quantity) {
        let sorteio = randomicNumber(limit);
        if (numbers.indexOf == -1) {
            
        }
        else{
            numbers.push(sorteio)
        }
    }
    return numbers;
    
}
function randomicNumber(LimitNumber) {
    return parseInt(Math.random() * LimitNumber);
}

const numbers = randNumberNotRepeted(50, 10000)
console.log(numbers)