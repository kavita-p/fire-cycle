const Log = (props) => {
  if (props.week < 1) {
    return (<input type="submit" onClick={props.advanceButton} value="Begin"/>);
  } else if (props.week > 4) {
    return (<input type="submit" onClick={props.advanceButton} value="Reset"/>)
  } else {
    return (
      <div>
        <form>
          <textarea value={props.scrawl} onChange={props.handleWriting}></textarea>
          <input type="submit" onClick={props.advanceButton} value="Next Week"/>
        </form>
      </div>
    )
  }
}

export default Log;