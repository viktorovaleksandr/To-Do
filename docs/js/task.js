const buttonAdd = document.querySelector('#js-add-todo');
const inputData = document.querySelector('.js-input-todo');
const ulTodo = document.querySelector('.js-list-todo');
const emptyMessage = document.querySelector('.js-empty-message');

function onAddNewTodo(event) {
	const list = document.createElement('li');
	list.className = `list-group-item list-group-item-secondary   
	list-group-item-action d-flex justify-content-between rounded-pill`;
	list.textContent = inputData.value;
	ulTodo.prepend(list);
	
	const closeButton = document.createElement('i');
	closeButton.className = 'bi bi-trash-fill';
	list.append(closeButton);

	inputData.value = '';
	emptyMessage.remove();
}

function showEmptyMessage() {
	if (ulTodo.children.length < 1) {
		ulTodo.append(emptyMessage);
	}  
}

inputData.addEventListener('keydown', event => {
   if(event.keyCode === 13) {
      onAddNewTodo();
   }
});

buttonAdd.addEventListener('click', onAddNewTodo);

ulTodo.addEventListener('click', (event) => {
	const task = event.target.closest('li');
	const removeButton = event.target.closest('i');

	task.classList.toggle('list-group-item-info');
	task.classList.toggle('text-decoration-line-through');

	if (removeButton) {
		removeButton.parentElement.remove();
	}
	showEmptyMessage();
});




