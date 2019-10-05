const suits = ['♦️', '♠️', '♥️', '♣️'];
const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const getNewPack = () => {
    return suits.reduce((c, s) => {
        return c.concat(numbers.map(n => s + ' ' + n));
    }, []);
};
