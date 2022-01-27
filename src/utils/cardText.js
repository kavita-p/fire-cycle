export const
  suits = {
    'Hearts': 'Bonds',
    'Diamonds': 'News',
    'Clubs': 'Fortune',
    'Spades': 'Mysteries'
  },
  suitMeanings = {
    'Hearts': 'connections: between people, places, things, etc',
    'Diamonds': 'news, of course, primarily from the outside world: about the lowlands, the royal palace, the state of the war, and so on',
    'Clubs': 'omens, auspices, and lucky or unlucky events',
    'Spades': 'strange and unexplained events, phenomena no one understands, and maybe a hint of the supernatural'
  },
  ranks = {
    'Ace': 'a grand and unforgettable event: the kind of thing that will change the lives of everyone in the village',
    '1': 'a memorable personal event, focused on a single person',
    '2': 'an event with an upside for some people in the village, and a downside for others',
    '3': 'a powerful event, which cannot be responded to so much as endured',
    '4': 'an event that comes in stages: anticipation, building, peaking, and breaking',
    '5': 'an event that cements a new truth in everyone\'s lives',
    '6': 'an event composed of many small interactions, spread over a wide time and place',
    '7': 'a lucky happenstance',
    '8': 'an event which reminds you of your childhood, for good or ill',
    '9': 'a fragmented event, whose consequences will be felt the most years down the line',
    '10': 'a stunning event, that catches everyone by surprise',
    'Jack': 'an event that is more than it appears at first glance',
    'Queen': 'an event which inspires both awe and fear',
    'King': 'an event caused by the actions of the king, for good or ill'
  },
  seasons = function (week, scale) {
    if (week/scale <= 0.25) {
      return 'Ashwhite';
    } else if (week/scale <= 0.5) {
      return 'Sparks';
    } else if (week/scale <= 0.75) {
      return 'Bonfires';
    } else {
      return 'Cinders';
    }
  }