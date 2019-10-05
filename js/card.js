import decks from './decks.json';

const renderCard = ({ deck, side, card }) => {
  const [{ cards }] = decks.filter(({ name }) => name === deck);

  const correctCard = cards[card];

  const text = side === 'a' ? correctCard.sideA : correctCard.sideB;

  console.log(text);
};

export { renderCard };
