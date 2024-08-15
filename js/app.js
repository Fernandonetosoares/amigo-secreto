let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    lista.textContent = ` ${lista.textContent} ${amigo.value},  `;
    amigos.push(amigo.value);
    amigo.value = '';
}

function sortear(){

}
