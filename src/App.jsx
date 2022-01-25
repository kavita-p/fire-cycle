import _ from 'underscore';
import {useState} from 'react';
import Calendar from './Calendar.jsx';
import Log from './Log.jsx';


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

  const [scrawl, updateScrawl] = useState('');
  const [journal, updateJournal] = useState([]);

  const advanceButton = (e) => {
    e.preventDefault();

    //update journal
    let newEntry = {
      event: card,
      entry: scrawl
    }
    updateJournal([...journal, newEntry]);
    updateScrawl('');

    //change weeks, draw new card
    if (week > 4) {
      changeWeek(0);
      updateDeck(deckBuilder());
      updateJournal([]);
    } else {
      changeWeek(week + 1);
      updateDeck(deck.slice(0, deck.length - 1))
    }
    updateCard(deck[deck.length - 1]);
  }

  const handleWriting = (e) => {
    updateScrawl(e.target.value);
  }


  return (
    <div className="App">
      <h1>Fire Cycle</h1>
      <h2>A year in the peaks.</h2>
      <Calendar week = {week} card = {card} />
      {/* <Log week = {week} journal = {journal}/> */}
      <div>
        <form>
          <textarea value={scrawl} onChange={handleWriting}></textarea>
          <input type="submit" onClick={advanceButton} value={week > 4 ? 'Reset' : 'Next Week'}/>
        </form>
      </div>
    </div>
  );
}

export default App;
