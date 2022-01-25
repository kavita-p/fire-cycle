const Calendar = (props) => {
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
          {`Playing ${props.card.rank} of ${props.card.suit}`}
        </div>
      </div>
    );
  }
}

export default Calendar;