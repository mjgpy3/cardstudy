import decks from './decks.json';

const renderShuffledCard  = ({ deck }) => {
  const [{ cards }] = decks.filter(({ name }) => name === deck);

  renderCard({
    deck,
    side: 'a',
    card: Math.floor(Math.random() * cards.length),
    mode: 'shuffled'
  });
}

const renderCard = ({ deck, side, card, mode }) => {
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
  col.className = 'col s12 m12';

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
  flipLink.href =
    mode === 'shuffled'
      ? `/?deck=${deck}&side=${oppositeSide}&card=${card}&mode=shuffled`
      : `/?deck=${deck}&side=${oppositeSide}&card=${card}`;

  flipLink.appendChild(
    document.createTextNode('Flip')
  );

  const previousLink = document.createElement('a');
  previousLink.href = `/?deck=${deck}&side=a&card=${previousCard}`;

  if (mode !== 'shuffled') {
    previousLink.appendChild(
      document.createTextNode('Previous')
    );
  }

  const nextLink = document.createElement('a');
  nextLink.href =
    mode === 'shuffled'
      ? `/?deck=${deck}&mode=shuffled`
      : `/?deck=${deck}&side=a&card=${nextCard}`;

  nextLink.appendChild(
    document.createTextNode('Next')
  );

  action.appendChild(previousLink);
  action.appendChild(flipLink);
  action.appendChild(nextLink);
};

export { renderCard, renderShuffledCard };
