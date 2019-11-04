const buttonsItem = document.querySelectorAll('.feedback-item__button');

if (!!buttonsItem) {
    buttonsItem.forEach(button => {
        button.addEventListener('click', function (event) {
            const thisButton = event.target;
            const fadeBlock = thisButton.parentNode.querySelector('.fade-block');

            thisButton.classList.toggle('active');  
            fadeBlock.classList.toggle('show');
        });
    });
}


const buttonShowModals = document.querySelector('.feedback__button');
const modals = document.querySelector('.feedback-form');

if (!!buttonShowModals) {
    buttonShowModals.addEventListener('click', function (event) {
        modals.classList.toggle('show');
    });

    const modalsIconClose = modals.querySelector('.feedback-form__icon-close');

    modalsIconClose.addEventListener('click', function (event) {
        modals.classList.remove('show');
    });
}