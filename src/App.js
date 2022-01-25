import './App.css';
const _ = require('underscore');

const App = () => {


  //build deck
  const deckBuilder = () => {
    let deck = [];
    ['H', 'C', 'S', 'D'].forEach(suit => {
      ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'].forEach(rank => {
        deck.push(suit + rank);
      });
    });
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
  }

  let deck = deckBuilder();

  return (
    <div className="App">
      <h1>Fire Cycle</h1>
      <h2>A year in the peaks.</h2>
    </div>
  );
}

export default App;
