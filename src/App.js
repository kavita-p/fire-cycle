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
  const evaluateStage = () => {
    if (week === 0) {
      return 'Start';
    } else if (week > 4) {
      return 'End';
    } else {
      let card = deck.pop();
      console.log('eval', deck.length);
      return (
        <div>
          <div>
            {`Week ${week}`}
          </div>
          <div>
            {`Playing ${card.rank} of ${card.suit}`}
          </div>
        </div>
      );
    }
  }

  console.log(deck.length);

  return (
    <div className="App">
      <h1>Fire Cycle</h1>
      <h2>A year in the peaks.</h2>
      <div>
        {evaluateStage(week)}
      </div>
      <Log week = {week}/>
      <button onClick = {() => week > 4 ? changeWeek(0) : changeWeek(week + 1)}>
        {week > 4 ? 'Reset' : 'Next Week'}
      </button>
    </div>
  );
}

export default App;
