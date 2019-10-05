import { getNewPack } from './constants.js';
import { shuffle, takeCard, getPoints } from './actions.js';
import { Hand } from './Hand.js';

const hitButton = document.getElementById('hitButton');
const dealButton = document.getElementById('dealButton');
const standButton = document.getElementById('standButton');
const dealer = new Hand('dealer');
const player = new Hand('player');
hitButton.addEventListener('click', () => {
    player.takeCard(takeCard(cards));
});

dealButton.addEventListener('click', () => {
    newGame();
});
let cards = [];

standButton.addEventListener('click', () => {
    let avg = getPoints(cards) / cards.length;
    dealer.draw();
    while (dealer.points + avg < 22 && dealer.points <= player.points) {
        avg = getPoints(cards) / cards.length;
        console.log(avg);
        dealer.takeCard(takeCard(cards));
    }
});

const newGame = () => {
    cards = getNewPack();
    shuffle(cards);

    dealer.reset();
    player.reset();
    dealer.takeCard(takeCard(cards));
    player.takeCard(takeCard(cards));
    dealer.takeCard(takeCard(cards), true);
    player.takeCard(takeCard(cards));
};
