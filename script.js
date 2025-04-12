function avaliarEstudante() {
    const nota = parseFloat(document.getElementById('nota').value);
    const faltas = parseFloat(document.getElementById('faltas').value);
    const totalAulas = parseInt(document.getElementById('disciplina').value);
    const limiteFaltas = totalAulas * 0.25;

    let resultado = '';
    const resultadoDiv = document.getElementById('resultado');

    if (nota >= 6 && faltas <= limiteFaltas) {
        resultado = 'APR';
        resultadoDiv.className = 'aprovado';
    } else {
        resultado = 'REP';
        resultadoDiv.className = 'reprovado';
    }

    resultadoDiv.innerText = `Resultado: ${resultado}`;
}

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (name && cpf && phone && email && address) {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.innerText = 'Cadastro realizado com sucesso!'; // Define o texto da mensagem
        this.reset();
    }
});