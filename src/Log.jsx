const Log = (props) => {
  if (props.week > 4 || props.week < 1) {
    return null;
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