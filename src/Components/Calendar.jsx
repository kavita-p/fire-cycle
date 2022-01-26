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
    return (<div>
      <p>The wheel turns. Year comes after year. Eventually, the people conscripted from your village return, though not all of them, and no one knows how long they'll stay.</p>
      <p>The survivors look different. There's a haggardness to them. It's been a long, long year for them — and maybe for you, too. Maybe you look into the shadow behind their eyes and recognize it.</p>
      <p>But you've kept the log. And when they come to hear you read it, you see smiles on many of their faces. They may have been forced from this place, but thanks to you, they haven't been severed from it.</p>
      <p>They jostle into each other and murmur and chuckle and sigh and smile as you begin to read...</p>
    </div>);
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