let rootNode = document.getElementById('root');
let _el;

const todoList = {
    todos: [],

    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        view.displayTodos();
    },

    changeTodo: function (position, newTodoText) {
        this.todos[position].todoText = newTodoText;
        view.displayTodos();
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        view.displayTodos();
    },

    toggleCompleted: function (position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function () {
        const allTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < allTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === allTodos) {
            for (let i = 0; i < allTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < allTodos; i++) {
                this.todos[i].completed = true;
            }
        }

        view.displayTodos();
    }
};

const handlers = {
    toggleAll: function () {
        todoList.toggleAll();
    },

    activateAddButton: function () {
        let addButton = document.getElementById('add');
        let todoTextInput = document.getElementById('todoTextInput');

        if (todoTextInput.value.length < 1) {
            addButton.classList.remove('add-btn--active');
        } else {
            addButton.classList.add('add-btn--active');
        }
    },

    addTodo: function () {
        let todoTextInput = document.getElementById('todoTextInput');

        if (todoTextInput.value.length > 1) {
            todoList.addTodo(todoTextInput.value);
            todoTextInput.value = '';
        }
    },

    deleteTodo: function (position) {
        todoList.deleteTodo(position);
    }
};

const view = {

    displayTodos: function () {
        let todosUl = document.getElementById('todoList');
        todosUl.innerHTML = '';

        for (let i = 0; i < todoList.todos.length; i++) {
            let todoLi = document.createElement('li');
            let todoLiText = document.createElement('input');
            todoLiText.type = 'text';
            todoLiText.disabled = true;
            todoLiText.id = 'textInput';
            todoLi.classList.add('col-12');
            todoLi.draggable = 'true';

            let todoTextWithCompletion = todoList.todos[i].todoText;
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.id = 'checkbox';
            check.className = 'checkbox';
            check.checked = '';

            todoLi.id = i;
            todoLiText.value = todoTextWithCompletion;
            todoLi.appendChild(check);
            todoLi.appendChild(todoLiText);
            todoLi.appendChild(this.createEditButton());
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);

            if (document.getElementById('checkbox').checked === true) {
                todoList.toggleCompleted(i);
            }
            if (todoList.todos[i].completed === true) {
                todoLiText.style.textDecoration = 'line-through';
            }

        }
    },

    createDeleteButton: function () {
        let deleteButton = document.createElement('i');
        deleteButton.href = '#';
        deleteButton.textContent = 'delete';
        deleteButton.className = 'material-icons delete';
        return deleteButton;
    },

    createEditButton: function () {
        let editButton = document.createElement('i');
        editButton.href = '#';
        editButton.textContent = 'edit';
        editButton.className = 'material-icons edit';
        return editButton;
    },

    setUpEventListeners: function () {
        let todosUl = document.getElementById('todoList');

        todosUl.addEventListener('click', (event) => {
            let elementClicked = event.target;

            if (elementClicked.className === 'material-icons delete') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });

        // Edit List Item
        todosUl.addEventListener('click', (event) => {
            let elementClicked = event.target;
            let parentElement = elementClicked.parentNode;
            let position = elementClicked.parentNode.id;

            if (elementClicked.className === 'material-icons edit') {
                let check = parentElement.children[0];

                if (elementClicked.innerHTML === 'edit') {
                    let input = parentElement.children[1];
                    let editbtn = elementClicked;

                    input.disabled = false;
                    input.className += ' activeTextInput';

                    editbtn.innerHTML = 'save';
                    check.classList.add('hidden');

                    input.focus();
                    input.select();
                } else if (elementClicked.innerHTML === 'save') {
                    let input = parentElement.children[1];
                    let editbtn = elementClicked;
                    let textInput = input.value;
                    editbtn.innerHTML = 'edit';

                    input.disabled = true;
                    input.classList.remove('activeTextInput');
                    check.classList.remove('hidden');
                    todoList.changeTodo(position, textInput);
                }
            }
        });

        // Line through on check
        todosUl.addEventListener('click', (event) => {
            let elementClicked = event.target;
            let position = elementClicked.parentNode.id;
            let check = document.getElementById('checkbox');

            if (elementClicked.className === 'checkbox') {
                todoList.toggleCompleted(position);
                check.checked = true;
            }
        });
        //Drag&Drop section
        todosUl.addEventListener('dragover', (event) => {
            let elementClicked = event.target;

            let isBefore = function (el1, el2) {
        
                if ( el2.parentNode === el1.parentNode ) {
                  for ( let cur = el1.previousSibling; cur; cur = cur.previousSibling ) {
                    if (cur === el2) {
                        return true;
                    }
                  }
                } else {
                    return false;
                }
            }

            if (isBefore(_el, elementClicked)) {
                elementClicked.parentNode.insertBefore(_el, elementClicked);
            } else {
                elementClicked.parentNode.insertBefore(_el, elementClicked.nextSibling);
            }
        });

        todosUl.addEventListener('dragstart', (event) => {
            let elementClicked = event.target;

                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/plain', null);
                _el = elementClicked;
        });
    }
};

view.setUpEventListeners();
