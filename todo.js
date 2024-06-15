const todoList = [];
function addTodo(){
  const inputElement = document.querySelector('.input1');
  const dateInput = document.querySelector('.input2');
  const name = inputElement.value;
  const due = dateInput.value;
  todoList.push({
    name: name,
    due:due
  });
  
  let todoListHTML = '';
  for( let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const due = todoObject.due;
    const html = `
    <div>${name}</div> 
    <div>${due}</div>
    <button onclick="
    console.log(todoList[${i}]);
      todoList.splice(${i},1);
      
      addTodo();
      " class="del";>X</button>
    `
    todoListHTML += html;
    inputElement.value = '';
  }
  document.querySelector('.container').innerHTML = todoListHTML;
  
}

