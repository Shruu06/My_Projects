const todoInput =document.querySelector('.input');
const todoButton =document.querySelector('.btn');
const todoList =document.querySelector('.list');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(event)
{
    event.preventDefault(); 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value="";
}
function deleteCheck(e){
   const  item = e.target;


   if(item.classList[0] ==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
       todo.addEventListener('transitionend',function(){
           todo.remove();
       })
   }

   if(item.classList[0] === "complete-btn"){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
   }
}
