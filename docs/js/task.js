const addButton = document.querySelector('#js-add-todo');
const input = document.querySelector('.js-input-todo');
const ul = document.querySelector('.js-ul-list');
const plugList = document.querySelector('.js-plug-list');

function onAddTodo() {
	const li = document.createElement('li');
	li.className = `list-group-item list-group-item-action d-flex justify-content-between rounded-pill`;
	li.textContent = input.value;
	
	const closeButton = document.createElement('button');
	closeButton.className = 'btn-close';
	
	ul.appendChild(li).append(closeButton);
	input.value = '';

	onClickCloseButton(closeButton);
	onAddFirstTask(li);
}

function onClickCloseButton(button) {
   button.addEventListener('click',() => button.parentElement.remove());
}

function onAddFirstTask(list) {
   if(list.classList.contains('list-group-item')) {
   	plugList.remove();
   }
}

addButton.addEventListener('click', onAddTodo);
