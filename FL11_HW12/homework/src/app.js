const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

let pageLoad = addEventListener('load', function () {

    let mainContainer = this.document.createElement('div');
    mainContainer.id = 'mainPage';
    mainContainer.classList.add('visible');
    
    let mainPageHeader = this.document.createElement('h1');
    mainPageHeader.innerHTML = 'Simple TODO list application';

    let addButton = this.document.createElement('button');
    addButton.innerHTML = 'Add new task';
    addButton.addEventListener('click', function() {
        location.hash.replace = 'editPage';
    });

    mainContainer.appendChild(mainPageHeader);
    mainContainer.appendChild(addButton);

    let addContainer = this.document.createElement('div');
    addContainer.id = 'editPage';
    addContainer.classList.add('hidden');

    let addHeader = this.document.createElement('h1');
    addHeader.innerHTML = 'Add task';

    let addInput = this.document.createElement('input');
    addInput.placeholder = 'Enter new TODO item';

    let cancelButton = this.document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.addEventListener('click', function() {
        location.hash.replace = 'mainPage';
    });

    let saveButton = this.document.createElement('button');
    saveButton.innerHTML = 'Save changes';
    saveButton.addEventListener('click', function() {
        todoItems.push(addInput.value)
    });

    addContainer.appendChild(addHeader)
    addContainer.appendChild(addInput);
    addContainer.appendChild(cancelButton);
    addContainer.appendChild(saveButton);

    let editContainer = this.document.createElement('div');
    editContainer.id = 'editPage';
    editContainer.classList.add('hidden');

    let editHeader = this.document.createElement('h1');
    editHeader.innerHTML = 'Modify item';
    let editInput = this.document.createElement('input');
    editInput.placeholder = 'Enter modified text';

    editContainer.appendChild(editHeader);
    editContainer.appendChild(editInput);
    // editContainer.appendChild(cancelButton);
    // editContainer.appendChild(saveButton);

    rootNode.appendChild(mainContainer);
    rootNode.appendChild(addContainer);
    rootNode.appendChild(editContainer);
});

let setEventListener = function () {
    let mainContainer = document.getElementById('mainContainer');
    let addContainer = document.getElementById('addContainer');
    let editContainer = document.getElementById('editContainer');

    let hashChange = addEventListener('hashchange', function() {
        switch(this.location.hash) {
        case 'mainPage': {
            mainContainer.classList.add('visible');
            mainContainer.classList.remove('hidden');
            addContainer.classList.add('hidden');
            addContainer.classList.remove('visible');
            editContainer.classList.add('hidden');
            editContainer.classList.remove('visible');
            break;
        }
        case 'addPage': {
            mainContainer.classList.add('hidden');
            mainContainer.classList.remove('visible');
            addContainer.classList.add('visible');
            addContainer.classList.remove('hidden');
            editContainer.classList.add('hidden');
            editContainer.classList.remove('visible');
            break;
        }
        case 'editPage': {
            mainContainer.classList.add('hidden');
            mainContainer.classList.remove('visible');
            addContainer.classList.add('hidden');
            addContainer.classList.remove('visible');
            editContainer.classList.add('visible');
            editContainer.classList.remove('hidden');
            break;
        }
        default: { this.console.log('Oops... bad hash') }
        }
    })
}



console.log(todoItems);
//rootNode.appendChild(/* Append your list item node*/);
