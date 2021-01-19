const buttonAdd = document.querySelector('#js-add-todo');
const input = document.querySelector('.js-input-todo');
const ul = document.querySelector('.js-ul-list');
const plugList = document.querySelector('.js-plug-list');

function onCreateList() {
	const li = document.createElement('li');
	li.className = `list-group-item list-group-item-secondary 
	d-flex justify-content-between rounded-pill`;
	li.textContent = input.value;
	ul.append(li);
	onCreateButtonClose(li);
	onReplacePlugList(li);
}

function onCreateButtonClose(list) {
	const closeButton = document.createElement('button');
	closeButton.className = 'btn-close';
	list.append(closeButton);
}

function onReplacePlugList(list) {
   if(list.classList.contains('list-group-item')) {
   	plugList.remove();
   }
}

ul.addEventListener('click', (event) => {
	const li = event.target.closest('li');
	const closeButton = event.target.closest('button');
	
	li.classList.toggle('list-group-item-info');

	if (closeButton) {
		closeButton.parentElement.remove();
	}
});

buttonAdd.addEventListener('click', onCreateList);