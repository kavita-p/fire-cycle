import {useState, useEffect} from 'react';
import Calendar from './Components/Calendar.jsx';
import LogBook from './Components/LogBook.jsx';
import deckBuilder from './utils/deckBuilder.js'


const App = () => {

  //state
  const [week, changeWeek] = useState(0);
  const [deck, updateDeck] = useState(deckBuilder());
  const [card, updateCard] = useState(deck[deck.length - 1]);

  const [scrawl, updateScrawl] = useState('');
  const [journal, updateJournal] = useState([]);

  //download
  const [fileUrl, updateFileUrl] = useState('blank');
  const [downloadDate, updateDownloadDate] = useState('');

  let advanceButton = (e) => {
    e.preventDefault();

    if (!scrawl && week >= 1 && week <= 4) {
      alert('Write in the journal!');
    } else {
      //update journal
      if (week >= 1) {
        let newEntry = {
          week: week,
          event: card,
          log: scrawl
        }
        updateJournal([...journal, newEntry]);
        updateScrawl('');
      }

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
  }

  //event handlers

  let handleWriting = (e) => {
    updateScrawl(e.target.value);
  }

  let enactDownload;

  let handleDownload = (e) => {
    e.preventDefault();
    //create filename
    const month = new Date().toLocaleString('default', { month: 'short' });
    const day = new Date().getDay();
    updateDownloadDate(`${day}-${month}`);

    // const blob = new Blob();
    const obj = {hello: 'world'};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
    const fileLoc = URL.createObjectURL(blob);
    updateFileUrl(fileLoc);
    enactDownload.click();
    URL.revokeObjectURL(fileUrl);
    updateFileUrl('');
  }

  return (
    <div className="App">
      <a style={{display: "none"}}
        download = {`fire-cycle-${downloadDate}.md`}
        href={fileUrl}
        ref={e => enactDownload = e}
        >download it</a>
      <h1>Fire Cycle</h1>
      <h2>A year in the peaks.</h2>
      <Calendar week = {week} card = {card} />
      <LogBook
        week = {week}
        scrawl = {scrawl}
        journal = {journal}
        card = {card}
        advanceButton={advanceButton}
        handleWriting = {handleWriting}
        handleDownload = {handleDownload}
      />
    </div>
  );
}

export default App;
