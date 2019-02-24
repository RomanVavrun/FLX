// for input 
let taskText = document.getElementById('input-todo-task'); // input el
let NewTask; // text from input
let addButton = document.getElementById('add-btn'); // addbtn el
let addBtnIcon = document.querySelector('.material-icons'); // icon el
addButton.disabled = true; // disabled
let ulList = document.querySelector('.todo-task-list'); // ul list
let spanText = ulList.querySelector('.task-text'); // text
let maxLiElError = document.querySelector('.max-item-error'); // max li elem counter
let liDragElem = null // li elem
maxLiElError.style.display = 'none'; // error block hide 

// add btn active - diasabled
taskText.addEventListener('input', () => {
    if (taskText.value.trim() !== '') {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
    NewTask = taskText.value.trim();
});

// create task element
function newLeEL() {
    if (addButton === true) {
        return;
    }

    let newli = document.createElement('li'); // new li el
    newli.classList.add('task-list-item'); // add class to li el
    newli.setAttribute('draggable', 'true'); // add attr draggable
    newli.innerHTML = `<button class="button"><i class="material-icons checkbox">check_box_outline_blank</i>
    </button><span class="task-text">${NewTask}</span> <button class="button">
    <i class="material-icons">delete</i></button>`;
    ulList.insertBefore(newli, ulList.firstChild);

    // reset
    taskText.value = null;
    addButton.disabled = true;
    updateList();
    maxElementCount();
}

// checked btn
function checked() {
    this.firstChild.textContent = 'check_box';
    // alert(this.textContent);
}
// delete li element
function deleteLiElement() {
    this.parentElement.remove();
    maxElementCount();
}


// add task by btn
addButton.addEventListener('click', newLeEL)

// update list
function updateList() {
    let liNodeElement = document.querySelectorAll('.task-list-item');

    for (let i = 0; i < liNodeElement.length; i++) {
        liNodeElement[i].firstChild.addEventListener('click', checked)
        liNodeElement[i].lastChild.addEventListener('click', deleteLiElement)
        // edit here for DnD
    }

    liDragElem = liNodeElement// li elem
}

// max li element
function maxElementCount() {
    let maxLiEl = 10;
    if (ulList.childElementCount >= maxLiEl) {
        taskText.disabled = true;
        maxLiElError.style.display = 'block';
    } else if (ulList.childElementCount < maxLiEl) {
        taskText.disabled = false;
        maxLiElError.style.display = 'none';
    }
}
// usability
taskText.addEventListener('keypress', (evt) => {
    let pressedEnterKey = 13;
    if (evt.keyCode === pressedEnterKey && taskText.value.trim() !== '') {
        newLeEL();
    }
})