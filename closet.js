import isDead from './quests/isDead.js';

const USER = 'USER';

export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === id) {
            return item;
        }
    }
}

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    return JSON.parse(stringyUser);
}

export function loadProfile() {
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const gil = document.getElementById('gil');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    gil.textContent = user.gil;

    if (isDead(user)) {
        hp.textContent = 'DEAD';
    } else {
        hp.textContent = user.hp;
    }
}