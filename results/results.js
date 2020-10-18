import scoreGil from './score-gil.js';
import scoreHP from './score-hp.js';
import scoreTapes from './score-tapes.js';
import { loadProfile, getUser } from '../closet.js';
import { endMessage } from './result-messages.js';

loadProfile();

const user = getUser();

const hpResult = scoreHP(user.hp);
const gilResult = scoreGil(user.gil);
const tapeResult = scoreTapes(user.tapes);
const endResult = document.getElementById('the-end');

endMessage(endResult, hpResult, gilResult, tapeResult);
