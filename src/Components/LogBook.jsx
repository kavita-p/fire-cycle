import {suits} from '../utils/cardText.js';

const LogBook = (props) => {
  if (props.week < 1) {
    return (<input type="submit" onClick={props.advanceButton} value="Begin"/>);
  } else if (props.week > 4) {
    return (<div>
      {props.journal.map(entry => {
        return (
          <div key = {entry.week}>
            Week {entry.week}: {entry.event.rank} of {suits[entry.event.suit]}<br/>
            Entry: {entry.log}<br/>
          </div>
        )}
      )}
      <input type="submit" onClick={props.advanceButton} value="Reset"/>
      <button onClick={props.handleDownload} value="Download">Download</button>
    </div>)
  } else {
    return (
      <div>
        <form>
          <textarea
            value={props.scrawl}
            onChange={props.handleWriting}></textarea>
          <br/>
          <input type="submit" onClick={props.advanceButton} value="Next Week"/>
        </form>
      </div>
    )
  }
}

export default LogBook;