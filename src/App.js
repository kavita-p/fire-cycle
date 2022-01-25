import _ from 'underscore';
import {useState} from 'react';
import Log from './Log.js';


const App = () => {

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


  //control stage
  const [week, changeWeek] = useState(0);
  const [deck, updateDeck] = useState(deckBuilder());
  const [card, updateCard] = useState(deck[deck.length - 1]);

  const advanceButton = () => {
    if (week > 4) {
      changeWeek(0);
      updateDeck(deckBuilder());
    } else {
      changeWeek(week + 1);
      updateDeck(deck.slice(0, deck.length - 1))
    }
    updateCard(deck[deck.length - 1]);
  }

  return (
    <div className="App">
      <h1>Fire Cycle</h1>
      <h2>A year in the peaks.</h2>
      <Log week = {week} card = {card} />
      <button onClick = {advanceButton}>
        {week > 4 ? 'Reset' : 'Next Week'}
      </button>
    </div>
  );
}

export default App;
