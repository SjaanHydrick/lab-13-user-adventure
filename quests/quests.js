import createChoice from './createChoice.js';
import { loadProfile, getUser, saveUser, findById } from '../closet.js';
import quests from '../attic.js';
import tapes from '../tapeattic.js';
import scoreQuest from './scoreQuest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const quest = findById(quests, questId);
//
const tape = findById(tapes, questId);

if (!quest) {
    window.location = '../map/map.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const tapeChoices = document.getElementById('tape-choices');
const result = document.getElementById('result');
const tapeResult = document.getElementById('tape-result');
const resultDescription = document.getElementById('result-description');
const backButton = document.getElementById('back');


title.textContent = quest.title;
image.src = '../UserQuest' + quest.image;
description.textContent = quest.description;
backButton.style.display = 'none';

for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceDom = createChoice(choice);
    choices.appendChild(choiceDom);
}

choiceForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);

    //
    const user = getUser();
    scoreQuest(choice, quest.id, user);
    saveUser(user);

    choiceForm.classList.add('hidden');
    description.style.display = 'none';
    result.classList.remove('hidden');
    image.src = '../UserQuest' + choice.resultImage;
    resultDescription.textContent = choice.result;
    backButton.style.display = 'inline';

    loadProfile();
});

backButton.addEventListener('click', () => {
    window.location.href = './';
});