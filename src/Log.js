const Log = (props) => {
  if (props.week === 0) {
    return 'Start';
  } else if (props.week > 4) {
    return 'End';
  } else {
    return (
      <div>
        <div>
          {`Week ${props.week}`}
        </div>
        <div>
          {`Playing ${1} of ${1}`}
        </div>
        <form><textarea></textarea></form>
      </div>
    );
  }
}

export default Log;