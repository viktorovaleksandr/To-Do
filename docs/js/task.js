const buttonAdd = document.querySelector('#js-add-todo');
const input = document.querySelector('.js-input-todo');
const ul = document.querySelector('.js-list-todo');
const emptyMessage = document.querySelector('.js-empty-message');

function onAddNewTodo() {
	const li = document.createElement('li');
	li.className = `list-group-item list-group-item-secondary 
	d-flex justify-content-between rounded-pill`;
	li.textContent = input.value;
	ul.prepend(li);
	input.value = '';

	// removeEmptyMessage(li);
	createButtonClose(li);
	emptyMessage.remove();
}

function createButtonClose(list) {
	const closeButton = document.createElement('i');
	closeButton.className = 'bi bi-trash';
	list.append(closeButton);
}

// function removeEmptyMessage(list) {
// 	if(list.closest('.list-group-item')) {
// 	}
// }

ul.addEventListener('click', (event) => {
	const li = event.target.closest('li');
	const closeButton = event.target.closest('i');
	
	li.classList.toggle('list-group-item-info');
	li.classList.toggle('text-decoration-line-through');

	if (closeButton) {
		closeButton.parentElement.remove();
	}
});

buttonAdd.addEventListener('click', onAddNewTodo);