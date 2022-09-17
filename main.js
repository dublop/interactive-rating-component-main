const op1 = document.querySelector('.op-1');
const op2 = document.querySelector('.op-2');
const op3 = document.querySelector('.op-3');
const op4 = document.querySelector('.op-4');
const op5 = document.querySelector('.op-5');

const ratingContainer = document.querySelector('.rating-container');
const thankyouContainer = document.querySelector('.thankyou-container');
const button = document.querySelector('button');

const ratingSelected = document.querySelector('.rating-selected');

var option = 0;

op1.addEventListener('click', function(){
    option = 1;
    op1.classList.add('op-selected');
    op2.classList.remove('op-selected');
    op3.classList.remove('op-selected');
    op4.classList.remove('op-selected');
    op5.classList.remove('op-selected');
});

op2.addEventListener('click', function(){
    option = 2;
    op2.classList.add('op-selected');
    op1.classList.remove('op-selected');
    op3.classList.remove('op-selected');
    op4.classList.remove('op-selected');
    op5.classList.remove('op-selected');
});

op3.addEventListener('click', function(){
    option = 3;
    op3.classList.add('op-selected');
    op1.classList.remove('op-selected');
    op2.classList.remove('op-selected');
    op4.classList.remove('op-selected');
    op5.classList.remove('op-selected');
});

op4.addEventListener('click', function(){
    option = 4;
    op4.classList.add('op-selected');
    op1.classList.remove('op-selected');
    op2.classList.remove('op-selected');
    op3.classList.remove('op-selected');
    op5.classList.remove('op-selected');
});

op5.addEventListener('click', function(){
    option = 5;
    op5.classList.add('op-selected');
    op1.classList.remove('op-selected');
    op2.classList.remove('op-selected');
    op3.classList.remove('op-selected');
    op4.classList.remove('op-selected');
});

button.addEventListener('click', function(){
    if (option != 0) {
        ratingContainer.classList.add('inactive');
        thankyouContainer.classList.remove('inactive');
        ratingSelected.innerHTML = option;
    }else{
        alert("Please select an option.")
    }
});