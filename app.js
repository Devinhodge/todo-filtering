 // fetch data
 // store data in variable
 // HTML:
 // add input to take a number from 1 to 10
 // add button, filters todo by ^input number
 // pupolate todo list of userID todos

let orderedListElement = document.querySelector('ol')

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
    console.log('fetchTodos', fetchTodos)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}
/*const populateTodos = () => {
  var ol = document.getElementById("todo-list");
  ol.innerHTML = ``;
  arrayOfTodos.forEach((x) => {
    var li = document.createElement("li");
    var span = document.createElement("span");
    if (!x.completed) {
      span.style = "color:red";
    } else {
      span.style = "color:green";
    }
    span.innerText = x.title;
    li.appendChild(span);
    ol.appendChild(li);
  });
};*/
//let selectText = document.querySelector('userId');

const populateTodos = () => {
  var group = arrayOfTodos.userId + arrayOfTodos.title;
  console.log(option)
}
 //   userId.innerHTML = ele.title + ele.userId[ele.selectedIndex].text + '</b> </br>' +
  //      'Value of the Selected Text: <b>' + ele.title + '</b>';
