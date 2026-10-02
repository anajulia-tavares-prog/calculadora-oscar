function calcular(operacao) {

            let numero1 = Number(document.getElementById("numero1").value);
            let numero2 = Number(document.getElementById("numero2").value);
            let resultado;

            if (operacao == "+") {
                resultado = numero1 + numero2;
            }

            if (operacao == "-") {
                resultado = numero1 - numero2;
            }

            if (operacao == "*") {
                resultado = numero1 * numero2;
            }

            if (operacao == "/") {
                resultado = numero1 / numero2;
            }

            document.getElementById("resultado").innerText =
                "Resultado: " + resultado;
        }