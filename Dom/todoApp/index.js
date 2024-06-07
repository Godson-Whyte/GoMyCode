const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem('list'));
if(list){
    list.forEach((task) => {
        toDoList(task)
    });
}

form.addEventListener('submit',(event) => {
    event.preventDefault();
    toDoList();
});

function toDoList(task){
    let newTask = input.value;
    if(task){
        newTask = task.name;
    }


    const liEl = document.createElement('li');
    if(task && task.checked){
        liEl.classList.add('checked');
    }
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    input.value = "";

    const checkBtnEl = document.createElement('div');
    checkBtnEl.innerHTML = `
    <i class="fa fa-check-square"></i>`
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement('div');
    trashBtnEl.innerHTML = `
    <i class="fa fa-trash"></i>`
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener('click',() => {
        liEl.classList.toggle('checked');
        updateLocalStorage();
    });
    
    trashBtnEl.addEventListener('click',() => {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll('li');
    list = [];
    liEls.forEach((liEl) => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains('checked')
        });
    })
    localStorage.setItem('list',JSON.stringify(list));
}