import markdownEngine from '../utils/markdownEngine.js'
import ReactMarkdown from 'react-markdown';

const LogBook = (props) => {
  if (props.week < 1) {
    return (<div>
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
    return (<div>
      <ReactMarkdown children = {markdownEngine(props.journal, props.scale)}/>
      <input className="btn" type="submit" onClick={props.advanceButton} value="Reset"/>
      <button onClick={props.handleDownload} value="Download">Download</button>
    </div>)
  } else {
    return (
      <div>
        <form>
          <textarea
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