const button = document.querySelector('.button');
const head = document.querySelector('.head');
const firstScreen = document.querySelector('.firstScreen');
const secondScreen = document.querySelector('.secondScreen');
const trueAnswers = document.querySelector('.trueAnswers');
const falseAnswers = document.querySelector('.falseAnswers');
const inputFields = document.querySelectorAll('input[type="radio"]');
const inputFieldsCheck = document.querySelectorAll('input[type="checkbox"]');

let countOfTrue = 0;
let countOfFalse = 0;
let count = 0;

firstScreen.addEventListener('click', () => {
    countOfTrue = 0;
    countOfFalse = 0;
    count = 0;

    for (let i = 0, l = inputFields.length; i < l; i++) {
        if (inputFields[i].checked && inputFields[i].value == '1') {
            countOfTrue += 1;
        } else if (inputFields[i].checked && inputFields[i].value == '0') {
            countOfFalse += 1;
        }
    };

    for (let i = 0; i < inputFieldsCheck.length; i++) {
        if (inputFieldsCheck[i].checked && inputFieldsCheck[i].value == '1') {
            count += 1; 
        } else if (inputFieldsCheck[i].checked && inputFieldsCheck[i].value == '0') {
            count -= 1;  
        }
    };

    if (count == 2) {
        countOfTrue += 1;
    } else {
        countOfFalse += 1; 
    };

    if (countOfFalse + countOfTrue === 4) {
        button.disabled = false;
    }
});

button.addEventListener('click', () => {
    firstScreen.style.display = 'none';
    head.style.display = 'none';
    secondScreen.style.display = 'flex';


    trueAnswers.innerHTML = `Количество верных ответов: ${countOfTrue}`;
    falseAnswers.innerHTML = `Количество неверных ответов: ${countOfFalse}`;
});
    