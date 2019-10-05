export const shuffle = cards => {
    cards.sort(() => Math.random() - 0.5);
};

export const takeCard = cards => {
    if (cards.length) {
        return cards.pop();
    }
};

export const getPoints = cards => {
    return cards.reduce((a, b) => {
        if (!b) return a;
        const value = b.split(' ')[1];
        return (a += isNaN(value) ? 10 : Number(value));
    }, 0);
};
