
function scoreQuest(choice, questId, user) {
    user.hp += choice.hp;
    user.gil += choice.gil;
    user.tapes += choice.tapes;
    user.completed[questId] = true;
}

export default scoreQuest;