const addTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const tasks = document.getElementById('lista-tarefas');
const removeTask = document.getElementById('remover-finalizados');
const clear = document.getElementById('apaga-tudo');
const save = document.getElementById('salvar-tarefas');
const saveTasks = JSON.parse(localStorage.getItem('tarefas'));
const moveCima = document.getElementById('mover-cima');
const moveBaixo = document.getElementById('mover-baixo');
const clearTask = document.getElementById('remover-selecionado');
const chosenOne = document.getElementsByClassName('selected');

tasks.innerHTML = saveTasks;

addTask.addEventListener('click', () => {
  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  tasks.appendChild(newTask);
  inputTask.value = '';
});

tasks.addEventListener('click', (event) => {
  for (let i = 0; i < tasks.children.length; i += 1) {
    tasks.children[i].style.background = '';
    tasks.children[i].classList.remove('selected');
  }

  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected')
    event.target.style.background = '';
  }else{
    event.target.classList.add('selected');
    event.target.style.background = 'gray';
  };
});

tasks.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

removeTask.addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((element) => element.remove());
});

clear.addEventListener('click', () => {
  tasks.innerHTML = '';
});

save.addEventListener('click', () => {
  localStorage.setItem('tarefas', JSON.stringify(tasks.innerHTML));
  alert('Tarefas salvas!');
});

moveCima.addEventListener('click', () => {
  if (chosenOne.length > 0) {
    tasks.children[0] !== chosenOne[0] ? tasks.insertBefore(chosenOne[0], chosenOne[0].previousElementSibling) : false;
  }
});
moveBaixo.addEventListener('click', () => {
  if (chosenOne.length > 0) {
    tasks.lastChild !== chosenOne[0] ? tasks.insertBefore(chosenOne[0].nextElementSibling, chosenOne[0]) : false;
  }
});
clearTask.addEventListener('click', () => {
  chosenOne[0].remove();
});
