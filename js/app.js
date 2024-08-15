let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Informe o nome do amigo')
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Amigo já adicionado');
        return;
    }
    
    let lista = document.getElementById('lista-amigos');
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigos.push(amigo.value);
    amigo.value = '';

}

function sortear(){

    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos')
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')
    for (let i = 0; i < amigos.length - 1; i++) {
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
    }
    // Para fechar o ciclo
    sorteio.innerHTML += amigos[amigos.length - 1] + ' --> ' + amigos[0] + '<br>';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}