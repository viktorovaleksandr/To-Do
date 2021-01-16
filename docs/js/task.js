function initToDoList() {

	const buttonAdd = document.querySelector('.btn');
	const input = document.querySelector('.form-control');
	const ul = document.querySelector('ul');

	function onAddButtonClick() {
		const li = document.createElement('li');
		li.className = 'list-group-item d-flex justify-content-between align-items-cente list-group-item-action';
		li.textContent = input.value;

		const closeBtn = document.createElement("button");
		closeBtn.classList.add("btn-close");
	
		ul.appendChild(li).append(closeBtn);
		input.value = "";
		onRemoveTask(closeBtn);
	}

	function onRemoveTask(element) {
   	element.addEventListener("click",(e) => {
      	element.parentElement.remove();
   	});
	}

	input.onfocus = function clearInput() {
  	this.removeAttribute('placeholder');
	}

	buttonAdd.addEventListener('click', onAddButtonClick);
}

document.addEventListener("DOMContentLoaded", initToDoList);