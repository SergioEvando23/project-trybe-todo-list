const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const orderList = document.getElementById('lista-tarefas');

function removeBackground() {
    for (let ind = 0; ind < orderList.children.length; ind += 1) {
        orderList.children[ind].classList.remove('selected');
    }
}

button.addEventListener('click', () => {
    const itemList = document.createElement('li');
    orderList.appendChild(itemList);
    itemList.innerText = input.value;
    input.value = "";
});

orderList.addEventListener('click', (event) => {
    removeBackground();
    event.target.classList.toggle('selected');
})

orderList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
})

