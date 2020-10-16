import { saveUser } from '../closet.js';
import makeUser from '../makeUser.js';

const form = document.querySelector('form');
// const nextOne = document.getElementById('next1');
// const nextTwo = document.getElementById('next2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const user = makeUser(data);

    saveUser(user);

    window.location = '../map/map.html';
});