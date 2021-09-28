const card_content = document.querySelector('.card_content');
const trigger = document.querySelector('.card');

trigger.addEventListener("click", ()=> {
    card_content.classList.toggle('rotate');
});

