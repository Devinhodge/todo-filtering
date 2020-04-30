 // fetch data
 // store data in variable
 // HTML:
 // add input to take a number from 1 to 10
 // add button, filters todo by ^input number
 // pupolate todo list of userID todos
 
 let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},

{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
]

let orderedListElement = document.querySelector('ol')
let todoData = []

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
      console.log('fetchTodos', fetchTodos)
}
fetchTodos(
  console.log('todoData', todoData)
)