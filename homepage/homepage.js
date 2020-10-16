import { saveUser } from '../closet.js';
import makeUser from '../makeUser.js';

const form = document.querySelector('form');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const input = document.querySelector('input');
const text = document.querySelector('p');
const readyButton = document.getElementById('submit');
const img = document.getElementById('merchant');

input.style.display = 'none';
readyButton.style.display = 'none';
buttonTwo.style.display = 'none';
text.textContent = 'Hey...';

buttonOne.addEventListener('click', () => {
    text.textContent = 'Hey, wake up! You think I pay you to sleep?!';
    buttonOne.style.display = 'none';
    buttonTwo.style.display = 'inline';
    img.src = '../UserQuest/shopkeep1.jpg';
});

buttonTwo.addEventListener('click', () => {
    text.textContent = `You gotta shape up, kid. Relic hunting ain't no easy business. Gotta be on your toes all the time or you might lose 'em, you know what I'm saying? Ha! So here's the job: there's a trading post out near the coast that I need to get to. The walk'll take about three weeks, and I need you to do my dirty work along the way. That means being on the lookout for relics! If you find a good one, I might even kick you some Gil.`;
    buttonTwo.style.display = 'none';
    readyButton.style.display = 'inline';
});

readyButton.addEventListener('click', () => {
    text.textContent = 'Now, tell me again...What\'s your name?';
    buttonTwo.style.display = 'none';
    input.style.display = 'inline';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const user = makeUser(data);

    saveUser(user);

    window.location = '../map/map.html';
});