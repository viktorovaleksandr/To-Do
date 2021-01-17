const addButton = document.querySelector('.btn');
const input = document.querySelector('.form-control');
const ul = document.querySelector('ul');
const emptyLi = document.querySelector('.js-li');

function onAddBtnTask() {
	const li = document.createElement('li');
	li.className = `list-group-item list-group-item-action d-flex justify-content-between rounded-pill`;
	li.textContent = input.value;
	
	const closeButton = document.createElement('button');
	closeButton.className = 'btn-close';
	
	ul.appendChild(li).append(closeButton);
	input.value = '';

	deleteTask(closeButton);
	eventAddTask(li);
}

function deleteTask(button) {
   button.addEventListener('click',() => button.parentElement.remove());
}

function eventAddTask(list) {
   if(list.classList.contains('list-group-item')) {
   	emptyLi.remove();
   }
}

addButton.addEventListener('click', onAddBtnTask);
