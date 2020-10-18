import quests from '../attic.js';
import { getUser, loadProfile } from '../closet.js';
import createQuestLink from './createLink.js';
import createCompletedQuest from './completedQuests.js';
import hasCompletedAllQuests from './completedAllQuests.js';
import isDead from '../quests/isDead.js';

loadProfile();
//
const user = getUser();

if (isDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;

    if (user.completed[quest.id]) {
        questDisplay = createCompletedQuest(quest);
    } else {
        questDisplay = createQuestLink(quest);
    }

    nav.appendChild(questDisplay);
}

