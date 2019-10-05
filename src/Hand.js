import { getPoints } from './actions.js';

export const drawCards = (hand, name) => {
    const domEl = document.getElementById(name);

    domEl.innerText = hand.toString();
};

export class Hand {
    constructor(name) {
        this.name = name;
        this.domEl = document.getElementById(name);
        this.pointsEl = document.getElementById(name + 'points');
        this.cards = [];
    }

    draw() {
        this.domEl.innerText = this.cards.toString();
        this.pointsEl.innerText = this.points;
    }

    takeCard(card, hide = false) {
        if (card) {
            this.cards.push(card);
            this.points = getPoints(this.cards);
            if (!hide) {
                this.draw();
            }
        }
    }

    reset() {
        this.cards = [];
        this.draw();
    }
}
