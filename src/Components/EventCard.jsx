import {suits, suitMeanings} from '../utils/cardText.js';

const EventCard = (props) => {

  // console.log(cardText);
  console.log(suits);

  return (<div className="Event-Card">
    <div className="event text">The {props.card.rank} of {suits[props.card.suit]}.</div>
    <p className="event-description text">The {props.card.rank} represents {'{PENDING...}'}. The suit of {suits[props.card.suit]} is associated with {suitMeanings[props.card.suit]}.</p>
    <p>What happened, and how did the people respond? What did you think of it all?</p>
  </div>)

}

export default EventCard;