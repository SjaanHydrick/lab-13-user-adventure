import createChoice from './createChoice.js';
import { loadProfile, getUser, saveUser, findById } from '../closet.js';
import quests from '../attic.js';
import scoreQuest from './scoreQuest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = findById(quests, questId);
//
const tapeIds = quest.tapeChoices;

if (!quest) {
    window.location = '../map/index.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');

const choiceForm = document.getElementById('choice-form');
const tapeForm = document.getElementById('tape-form');

const choices = document.getElementById('choices');
const tapeOptions = document.getElementById('tape-choices');

const result = document.getElementById('result');
const tapeResult = document.getElementById('tape-result');
const resultDescription = document.getElementById('result-description');

const backButton = document.getElementById('back');
const tapeButton = document.getElementById('tape-button');


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

    const user = getUser();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(quest.choices, choiceId);

    choiceForm.classList.add('hidden');
    description.style.display = 'none';
    result.classList.remove('hidden');
    image.src = '../UserQuest' + choice.resultImage;
    resultDescription.textContent = choice.result;
    tapeResult.style.display = 'none';

        //
    if (choice.tapeId === true) {
        
        for (let i = 0; i < tapeIds.length; i++) {
            const choice = tapeIds[i];
            const tapeDom = createChoice(choice);
            tapeOptions.appendChild(tapeDom);
        }

        tapeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const tapeData = new FormData(tapeForm);
            const tapeId = tapeData.get('choice');
            const tapeChoice = findById(quest.tapeChoices, tapeId);

            image.style.display = 'none';
            resultDescription.style.display = 'none';
            tapeButton.style.display = 'none';

            tapeResult.style.display = 'inline-block';
            tapeResult.textContent = tapeChoice.result;

            backButton.style.display = 'inline';

            scoreQuest(tapeChoice, quest.id, user);
            saveUser(user);

            loadProfile();
            
        });
            
    
    } else {
        tapeForm.style.display = 'none';
        backButton.style.display = 'inline';

        scoreQuest(choice, quest.id, user);
        saveUser(user);
    
        loadProfile();
    }

});

backButton.addEventListener('click', () => {
    window.location = '../map/index.html';
});