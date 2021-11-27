const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');

button.addEventListener('click', () =>{
    const itemList = document.createElement('li');   
    orderList.appendChild(itemList);
    itemList.innerText = input.value;
    input.value = "";
});