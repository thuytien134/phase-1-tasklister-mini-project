document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildTodo(e.target.querySelector('#new-task-description').value)
    form.reset()
  }
  )
});
function buildTodo(todo) {
  const ul = document.querySelector('ul')
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  li.innerHTML = `${todo} `
  ul.appendChild(li)
  li.appendChild(btn)
  btn.addEventListener('click', deleteTask)
}

function deleteTask(e){
e.target.parentNode.remove()
}
// const content = document.querySelector('#main-content')
// const form2 = document.createElement('form')
// content.appendChild(form2)
