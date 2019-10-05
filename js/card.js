import decks from './decks.json';

const renderCard = ({ deck, side, card }) => {
  const [{ cards }] = decks.filter(({ name }) => name === deck);

  const correctCard = cards[card];

  const text = side === 'a' ? correctCard.sideA : correctCard.sideB;

  const oppositeSide = side === 'a' ? 'b' : 'a';
  const previousCard = card == 0 ? cards.length - 1 : card - 1;
  const nextCard = card == cards.length - 1 ? 0 : card + 1;

  const content = document.getElementById('content');

  const row = document.createElement('div');
  row.className = 'row';

  content.appendChild(row);

  const col = document.createElement('div');
  col.className = 'col s12 m3';

  row.appendChild(col);

  const cardElem = document.createElement('div');
  cardElem.className = 'card large';

  col.appendChild(cardElem);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  cardElem.appendChild(cardContent);

  const action = document.createElement('div');
  action.className = 'card-action';

  cardElem.appendChild(action);

  const title = document.createElement('span');
  title.className = 'card-title';

  title.appendChild(
    document.createTextNode(text)
  );

  cardContent.appendChild(title);

  const flipLink = document.createElement('a');
  flipLink.href = `/?deck=${deck}&side=${oppositeSide}&card=${card}`;

  flipLink.appendChild(
    document.createTextNode('Flip')
  );

  const previousLink = document.createElement('a');
  previousLink.href = `/?deck=${deck}&side=a&card=${previousCard}`;

  previousLink.appendChild(
    document.createTextNode('Previous')
  );

  const nextLink = document.createElement('a');
  nextLink.href = `/?deck=${deck}&side=a&card=${nextCard}`;

  nextLink.appendChild(
    document.createTextNode('Next')
  );

  action.appendChild(previousLink);
  action.appendChild(flipLink);
  action.appendChild(nextLink);

};

export { renderCard };
