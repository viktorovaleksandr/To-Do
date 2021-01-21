const buttonAdd = document.querySelector('#js-add-todo');
const input = document.querySelector('.js-input-todo');
const ul = document.querySelector('.js-list-todo');
const emptyMessage = document.querySelector('.js-empty-message');

function onAddNewTodo() {
	const li = document.createElement('li');
	li.className = `list-group-item list-group-item-secondary   
	list-group-item-action d-flex justify-content-between rounded-pill`;
	li.textContent = input.value;
	ul.prepend(li);
	input.value = '';

	createButtonClose(li);
	emptyMessage.remove();
}

function createButtonClose(list) {
	const closeButton = document.createElement('i');
	closeButton.className = 'bi bi-trash-fill';
	list.append(closeButton);
}

function showEmptyMessage() {
	if (ul.children.length < 1) {
		ul.append(emptyMessage);
	}  
}

ul.addEventListener('click', (event) => {
	const li = event.target.closest('li');
	const closeButton = event.target.closest('i');

	li.classList.toggle('list-group-item-info');
	li.classList.toggle('text-decoration-line-through');

	if (closeButton) {
		closeButton.parentElement.remove();
	}

	showEmptyMessage();
});

buttonAdd.addEventListener('click', onAddNewTodo);

