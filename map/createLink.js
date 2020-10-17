function createQuestLink(quest) {

    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quests/?id=' + quest.id;

    link.style.marginTop = quest.map.marginTop;
    link.style.marginLeft = quest.map.marginLeft;
    link.textContent = quest.title;

    return link;

}

export default createQuestLink;