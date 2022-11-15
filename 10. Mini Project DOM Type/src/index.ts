// CREATE THIS MINI PROJECT

// 1. tsc --init
// 2. mkdir src dist
// 3. touch src/index.ts
// 4, create index.html and add <script src="dist/index.js"></script>
// 5. Add console log on index.ts and see the output in browser
// 6. To live reload the HTML we need lite npm package
// 7. Run npm init -y, this will create a package.json file
// 8. npm install lite-server
// 9. Run tsc -watch & npm start

///////////////////////////////////////////////////////////////////////////
// "!" AT END IS FROM TYPESCRIPT WHICH MEANS THIS OBJECT WILL NEVER BE NULL
// AND THEN "btn" WILL NOT GIVE ERROR THAT "btn" CAN MIGHT BE NULL
// USE IT IF YOU ARE SURE VALUE WILL BE FOUND AND OBJECT WON'T BE NULL
//////////////////////////////////////////////////////////////////////////
// const btn  = document.querySelector("#btn")!;
// btn?.addEventListener('click', function (){
//     console.log('Button Clicked');
// })

//////////////////////////////////////////////////////////////////////////////////
// SECOND WAY OF DOING THIS: USE JAVASCRIPT "?" TO CHECK FOR OBJECT IS NULL OR NOT
//////////////////////////////////////////////////////////////////////////////////
// const btn  = document.querySelector("#btn");
// // In TypeScript WE USE "?" FOR OPTIONAL VARIABLE IN A OBJECT
// // In JavaScript WE USE "?" THAT MEANS IF AN OBJECT IS NULL, DON'T RUN AFTER "."
// btn?.addEventListener('click', function (){
//     console.log('Button Clicked');
// })

//////////////////
// TYPE ASSERTIONS
//////////////////
// let myName: unknown = "Rahul Choudhary";
//
// // IF TYPE IS UNKNOWN THEN TYPESCRIPT WILL GIVE ERROR: Object is of type 'unknown'.
// // const charLength  = myName.length;
//
// // NOW WITH "as string" WE ARE SAYING TO TYPESCRIPT BELIEVE ME ITS STRING TYPE
// const charLength  = (myName as string).length;
// console.log(charLength)

////////////////
// START PROJECT
////////////////
const todoForm = document.querySelector('#todoForm') as HTMLFormElement;
const todoInput = document.querySelector('#todoInput')! as HTMLInputElement;
const todoUL = document.querySelector('#todoList') as HTMLUListElement;

interface Todo {
    text: string,
    completed: boolean
}

const todos: Todo[] = readTodos();

todos.forEach( (todo) => {
    createTodo(todo);
});

function readTodos(): Todo[] {
    const todos = localStorage.getItem('todos');
    if (todos === null) return [];
    return JSON.parse(todos);
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

todoForm.addEventListener('submit', function (e:SubmitEvent) {
    e.preventDefault();

    const newTodo = {
        text: todoInput.value,
        completed: false
    }
    todos.push(newTodo);
    saveTodos();

    createTodo(newTodo);

    todoInput.value = '';
});

function createTodo(todo: Todo) {
    const newTodoText = todo.text;
    const newLi = document.createElement('li');
    newLi.append(newTodoText);

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function(e) {
        todo.completed = checkbox.checked;
        saveTodos();
    })
    newLi.append(checkbox);

    todoUL.append(newLi);
}
