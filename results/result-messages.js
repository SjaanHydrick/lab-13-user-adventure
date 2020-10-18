
export function endMessage(display, hp, gil, scoreTapes) {
    if (hp === 'dead' && scoreTapes === 'selfcentered'){
        display.textContent = `Welp, you're dead. The world is a dark, sad place sometimes.`;
    } else if (hp === 'dead' && scoreTapes === 'wise') {
        display.textContent = `You died. Will anyone tell your story?`;
    } else if (hp === 'frail' && gil === 'poor' && scoreTapes === 'selfcentered'){
        display.textContent = `Well, not everyone is cut out to be an adventurer. You return to your family in shame.`;
    } else if (hp === 'frail' && gil === 'poor' && scoreTapes === 'wise') {
        display.textContent = `Well, not everyone is cut out to be an adventurer. You return to your family and become the village story-teller.`;
    } else if (hp === 'frail' && gil === 'rich' && scoreTapes === 'selfcentered') {
        display.textContent = `The merchant is impressed with your relic-hunting skills! They hire you on full-time (as well as a healer to patch you up).`;
    } else if (hp === 'frail' && gil === 'rich' && scoreTapes === 'wise') {
        display.textContent = `The merchant is impressed with your relic-hunting skills! They hire you on full-time (as well as a healer to patch you up). You dedicate your life to collecting relics and telling the stories of the past!`;
    } else if (hp === 'healthy' && gil === 'poor' && scoreTapes === 'selfcentered') {
        display.textContent = `You survived! Though the merchant isn't pleased with your work. Guess you'll have to find a new job. You return to your family in shame.`;
    } else if (hp === 'healthy' && gil === 'poor' && scoreTapes === 'wise') {
        display.textContent = `You survived! The merchant isn't  pleased with your work, but they are very interested in the tapes you've collected. You sell them for a profit and become a wandering story-teller!`;
    } else if (hp === 'healthy' && gil === 'rich' && scoreTapes === 'selfcentered') {
        display.textContent = `The merchant is impressed with your relic-hunting skills! They hire you on full-time. You live a life full of adventure and retire rich, fat, and happy!`;
    } else if (hp === 'healthy' && gil === 'rich' && scoreTapes === 'wise') {
        display.textContent = `The merchant is impressed with your relic-hunting skills! They hire you on full-time. You dedicate your life to collecting relics and telling the stories of the past!`;
    }
    
}