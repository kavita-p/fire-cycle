import EventCard from './EventCard.jsx';

const Calendar = (props) => {
  if (props.week === 0) {
    return (<div className="intro text">
      <p>At the end of the season of Cinders, the king sent his armies across the land. When they came here, they demanded half our village's able-bodied adults to fight in the war.</p>
      <p>It is the season of Ashwhite now, and we are not sure if we can survive without them.</p>
      <p>On the day of Emberdeath, the day when the red and orange flashfire of falling leaves gives way to the soft and deadly cover of snowfall, Grandmother Owl called you to her home. As she shuffled about, she fixed you with her eyes, and studied you for a long, long time in silence.</p>
      <p>"It's you this year," she announced suddenly. "It's you who'll keep the log. Often or not; that much is up to you. But you'll keep it."</p>
      <p>There's no arguing with Grandmother Owl. Better get to writing.</p>
    </div>);
  } else if (props.week > 4) {
    return null;
  } else {
    return (
      <div className="calendar">
        {`Week ${props.week}`}
        <EventCard card = {props.card} />
      </div>
    );
  }
}

export default Calendar;