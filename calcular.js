function calcularIMC() {
        // Obtém os valores dos inputs
        const peso = parseFloat(document.getElementById('peso').value);
        console.log(`O Seu peso é: ${peso}`);
        const altura = parseFloat(document.getElementById('altura').value);
        console.log(`A Sua altura é: ${altura}`);
         
        const resultadoDiv = document.getElementById('resultado');
        console.log(resultadoDiv);

        // Validação básica
        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
            return;
        }
z
        // Cálculo do IMC: Peso / Altura²
        const imc = peso / (altura * altura);
        
        // Exibe o resultado com uma casa decimal
        let classificacao = "";
        if (imc < 18.5) classificacao = "se soprar voa mlk!";
        else if (imc < 25) classificacao = "Tá normal chefe! Sigma";
        else if (imc < 30) classificacao = "tá crescendo pros lado irmão";
        else classificacao = "Âncora de navio, se cuida mais irmão.";

        resultadoDiv.innerHTML = `Seu imc é: ${imc.toFixed(2)} (${classificacao})`;
    }