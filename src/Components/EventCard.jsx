const EventCard = (props) => {
  const suits = {
    'Hearts': 'Blessings',
    'Diamonds': 'News',
    'Clubs': 'Fortune',
    'Spades': 'Edges'
  }

  return (<div className="Event-Card">
    <div className="event text">The {props.card.rank} of {suits[props.card.suit]}.</div>
    <p className="event-description text">The {props.card.rank} represents {'{PENDING...}'}. The suit of {suits[props.card.suit]} is associated with {'{PENDING...}'}</p>
    <p>What happened, and how did the people respond? What did you think of it all?</p>
  </div>)

}

export default EventCard;