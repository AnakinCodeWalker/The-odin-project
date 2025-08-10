const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items');

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    const listItem = document.createElement('li');
    listItem.innerText = value;

    const deletebtn = document.createElement('button');
    deletebtn.innerText = 'x';
    listItem.appendChild(deletebtn);
    todoItemsContainer.appendChild(listItem);

    todoInput.value = "";
    deletebtn.addEventListener('click', () => {
        listItem.remove();
    });
});
