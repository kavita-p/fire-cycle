import {suits, suitMeanings, ranks} from '../utils/cardText.js';

const EventCard = (props) => {

  return (<div className="Event-Card">
    <div className="event text">The {props.card.rank} of {suits[props.card.suit]}.</div>
    <p className="event-description text">The <strong>{props.card.rank}</strong> represents {ranks[props.card.rank]}. The suit of <strong>{suits[props.card.suit]}</strong> is associated with {suitMeanings[props.card.suit]}.</p>
    <p>What happened, and how did the people respond? What did you think of it all?</p>
  </div>)

}

export default EventCard;