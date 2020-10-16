import { saveUser } from './closet.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    saveUser({
        name: data.get('name'),
        gold: 0,
        hp: 30,
        tapes: 0,
        completed: {}
    });

    window.location.href = './map/';
});