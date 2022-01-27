import {useState} from 'react';
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
  const [enactDownload, setDownloadEvent] = useState({});

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

  // let enactDownload;

  let handleDownload = (e) => {
    e.preventDefault();
    //create filename
    const month = new Date().toLocaleString('default', { month: 'short' });
    const day = new Date().getDay();
    const year = new Date().getFullYear();
    updateDownloadDate(`${day}-${month}`);


    let file =
    `# FIRE CYCLE
## A year in the peaks.
${day} ${month}. ${year}
`
    ;
    journal.forEach(entry => {
      file += `### Week ${entry.week}: The ${entry.event.rank} of ${entry.event.suit}`;
      file += '\n';
      file += entry.log;
      file += '\n';
    })

    const blob = new Blob([file], {type: 'text/plain'});
    const fileLoc = URL.createObjectURL(blob);
    Promise.resolve()
    .then (() => updateFileUrl(fileLoc))
    .then(() => enactDownload.click())
    .then(URL.revokeObjectURL(fileUrl))
    .then(updateFileUrl(''))
  }

  return (
    <div className="App">
      <a style={{display: "none"}}
        download = {`fire-cycle-${downloadDate}.md`}
        href={fileUrl}
        ref={e => setDownloadEvent(e)}
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
