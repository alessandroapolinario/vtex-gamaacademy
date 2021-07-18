const form = document.getElementById('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    
    let cadastrando = `<p>Cadastrando...</p>`

    let cadastrado = `<p>Cadastrado</p>`

    content.innerHTML = cadastrando

    setTimeout( () => {
        content.innerHTML = cadastrado
    }, 1000)
})