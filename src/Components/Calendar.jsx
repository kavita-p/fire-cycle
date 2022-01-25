const Calendar = (props) => {
  if (props.week === 0) {
    return null;
  } else if (props.week > 4) {
    return null;
  } else {
    return (
      <div>
        <div>
          {`Week ${props.week}`}
        </div>
        <div>
          {`You draw the ${props.card.rank} of ${props.card.suit}`}
        </div>
      </div>
    );
  }
}

export default Calendar;