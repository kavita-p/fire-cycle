import {suits, suitMeanings, ranks} from '../utils/cardText.js';

const EventCard = (props) => {

  return (<div className="Event-Card">
    <div className="event text">The {props.card.rank} of {suits[props.card.suit]}.</div>
    <p className="event-description text">The <b>{props.card.rank}</b> represents {ranks[props.card.rank]}. The suit of <b>{suits[props.card.suit]}</b> is associated with {suitMeanings[props.card.suit]}.</p>
    <p>What happened, and how did the people respond? What did you think of it all?</p>
  </div>)

}

export default EventCard;