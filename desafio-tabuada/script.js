const numero = document.getElementById("numero");
let resultadoTabuada = document.getElementById("resultadoTabuada");

function mostrarTabuada() {
    if (numero.value) {
        n = parseInt(numero.value);
        var msg = "";
        for (let i = 0; i < 1000; i++) {
            msg += `${i} * ${n} = ${i*n} <br>`;
        }
        resultadoTabuada.innerHTML = msg;
    }


}
function limparTabuada() {
    resultadoTabuada.innerHTML = "";
}