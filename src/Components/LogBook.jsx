import markdownEngine from '../utils/markdownEngine.js'
import ReactMarkdown from 'react-markdown';

const LogBook = (props) => {
  if (props.week < 1) {
    return (<div className="interactives">
      <select value={props.scale} onChange={props.handleScale}>
        <option value={12}>Monthly</option>
        <option value= {24}>Twice a month</option>
        <option value={52}>Every week</option>
        <option value={4}>Seasonally (demo)</option>
      </select><br/>
      <input className="btn" type="submit" onClick={props.advanceButton} value="Begin"/>
    </div>
    );
  } else if (props.week > props.scale) {
    return (<div className="interactives">
      <ReactMarkdown children = {markdownEngine(props.journal, props.scale)}/>
      <input className="btn" type="submit" onClick={props.advanceButton} value="Reset"/>
      <button onClick={props.handleDownload} value="Download">Download</button>
    </div>)
  } else {
    return (
      <div className="interactives">
        <form>
          <textarea
            cols={100}
            rows={20}
            placeholder='Write here. Markdown valid!'
            value={props.scrawl}
            onChange={props.handleWriting}></textarea>
          <br/>
          <input className="btn" type="submit" onClick={props.advanceButton} value="Next Week"/>
        </form>
      </div>
    )
  }
}

export default LogBook;