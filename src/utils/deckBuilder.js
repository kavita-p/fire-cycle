import _ from 'underscore';

const deckBuilder = () => {
  let deck = [];
  ['Hearts', 'Clubs', 'Spades', 'Diamonds'].forEach(suit => {
    ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'].forEach(rank => {
      deck.push({
        suit: suit,
        rank: rank
      });
    });
  });
  deck = _.shuffle(deck);
  return deck;
}

export default deckBuilder;