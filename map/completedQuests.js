
function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('completed');

    span.style.marginTop = quest.map.marginTop;
    span.style.marginLeft = quest.map.marginLeft;

    span.textContent = quest.title;
    return span;
}

export default createCompletedQuest;