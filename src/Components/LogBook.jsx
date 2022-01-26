const LogBook = (props) => {
  if (props.week < 1) {
    return (<input type="submit" onClick={props.advanceButton} value="Begin"/>);
  } else if (props.week > 4) {
    return (<div>
      {props.journal.map(entry => {
        console.log(entry);
        return (
          <div key = {entry.week}>
            Week {entry.week}: {entry.event.rank} of {entry.event.suit}<br/>
            Entry: {entry.log}<br/>
          </div>
        )}
      )}
      <input type="submit" onClick={props.advanceButton} value="Reset"/>
    </div>)
  } else {
    return (
      <div>
        <form>
          <textarea value={props.scrawl} onChange={props.handleWriting}></textarea><br/>
          <input type="submit" onClick={props.advanceButton} value="Next Week"/>
        </form>
      </div>
    )
  }
}

export default LogBook;