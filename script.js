const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo(){
    const item ={
        id :new Date().getTime(),
        Text : "",
        complete : false
    }

    todos.unshift(item);

    const {itemEl, inputEl} = createTodoElement(item);

    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');
    inputEl.focus();
}

function createTodoElement(item) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    if(item.complete){
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled','');

    const actionEl = document.createElement('div');
    actionEl.classList.add('action');

    const editBtnEl =document.createElement('button');
    editBtnEl.classList.add('material-icons')
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons','revome-btn');
    removeBtnEl.innerText='remove-circle';

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.append(checkBox);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl};
}