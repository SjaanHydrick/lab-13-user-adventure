import { quests } from '../quests/quests.js';

const ul = document.querySelector('ul');

quests.forEach(quest => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = quest.title;
    link.href = `/quests/?id=${quests.id}`;

    ul.append(li);
});