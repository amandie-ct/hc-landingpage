const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const sobrenome = form.sobrenome.value.trim();
    const email = form.email.value.trim();
    resetaInputs();

    localStorage.setItem('nomeInscrito', nome);
    localStorage.setItem('sobrenomeInscrito', sobrenome);
    localStorage.setItem('emailInscrito', email);

    alert('Inscrição concluída com sucesso!');

})

function resetaInputs() {
    form.reset();
}
