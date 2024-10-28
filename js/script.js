'use strict';

const modalTrigger = document.querySelector('.sign'),
modal = document.querySelector('.modal'),
modalClose = document.querySelector('.modal_close');

modalTrigger.addEventListener('click' , (e)  => {
e.preventDefault();
modal.classList.add('modal_active', 'transform');
});

modalClose.addEventListener('click' , () => {
modal.classList.remove('modal_active' , 'transform');
});

