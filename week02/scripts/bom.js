const userInput = document.querySelector('input');
const clickButton = document.querySelector('button');
const list = document.querySelector('.list');

clickButton.addEventListener('click', function() {
    if (userInput.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        userInput.focus();
        userInput.value='';
    }
}