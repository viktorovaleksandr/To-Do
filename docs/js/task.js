function createToDoList() {
	const buttonAdd = document.querySelector('.btn');
	const input = document.querySelector('.form-control');
	const ul = document.querySelector('ul');

	input.onfocus = function clearInput() {
  		this.removeAttribute('placeholder');
	}

	function onAddBtnClick() {
		const li = document.createElement('li');
		li.className = 'rounded-pill list-group-item d-flex justify-content-between list-group-item-action';
		li.textContent = input.value;

		const closeBtn = document.createElement("button");
		closeBtn.className = "btn-close";
	
		ul.prepend(li);
		li.append(closeBtn);
		input.value = "";

		onCloseBtnClick(closeBtn);
	}

	function onCloseBtnClick(button) {
   	button.addEventListener("click",(e) => {
      	button.parentElement.remove();
   	});
	}
	
	buttonAdd.addEventListener('click', onAddBtnClick);
}

document.addEventListener("DOMContentLoaded", createToDoList);
