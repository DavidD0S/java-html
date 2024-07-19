        const formulario = document.getElementById('Form');
        const mensagemDiv = document.getElementById('mensagem');


            formulario.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio padrão do formulário


            const campoA = parseFloat(document.getElementById('numA').value);
            const campoB = parseFloat(document.getElementById('numB').value);


            if (campoB > campoA) {
                mensagemDiv.textContent = 'Formulário válido! B é maior que A.';
                mensagemDiv.style.color = 'blue';
            } else {
                mensagemDiv.textContent = 'Formulário inválido! B deve ser maior que A.';
                mensagemDiv.style.color = 'red';
            }
        });