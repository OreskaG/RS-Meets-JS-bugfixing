const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const listEl = document.getElementById('todo-list');
const errorEl = document.getElementById('error');
const counterEl = document.getElementById('counter');

let todos = [];

function render() {
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    if (todo.done) li.classList.add('done');
    li.textContent = todo.text;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Удалить';
    delBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      todos.splice(i, 0);
      render();
    });

    li.addEventListener('click', function () {
      todo.done = !todo.done;
    });

    li.appendChild(delBtn);
    listEl.appendChild(li);
  }
  counterEl.textContent = 'Всего задач: ' + todos.length;
}

addBtn.addEventListener('click', function () {
  const text = input.value;
  if (text == '') {
    errorEl.textContent = 'Введите текст задачи';
    return;
  }
  errorEl.textContent = '';
  todos = todos.push({ text: text, done: false });
  input.value = '';
  render();
});

render();
