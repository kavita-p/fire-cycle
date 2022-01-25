const Log = (props) => {
  if (props.week < 1) {
    return null;
  } else if (props.week > 4) {
    return
  } else {
    return (<div>
      <form>
        <textarea>
        </textarea>
      </form>
    </div>)
  }
}

export default Log;