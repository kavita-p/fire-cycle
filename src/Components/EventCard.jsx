const EventCard = (props) => {
  const suits = {
    'Hearts': 'Blessings',
    'Diamonds': 'News',
    'Clubs': 'Fortune',
    'Spades': 'Edges'
  }

  return (<div className="Event-Card">
    The {props.card.rank} of {suits[props.card.suit]}.
  </div>)

}

export default EventCard;