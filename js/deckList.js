import decks from './decks.json';

const renderDeckList = () => {
  const deckList = document.getElementById('content');

  const row = document.createElement('div');
  row.className = 'row';

  deckList.appendChild(row);

  decks.forEach(deck => {
    const col = document.createElement('div');
    col.className = 'col s12 m3';

    row.appendChild(col);

    const card = document.createElement('div');
    card.className = 'card';

    col.appendChild(card);

    const content = document.createElement('div');
    content.className = 'card-content';

    card.appendChild(content);

    const action = document.createElement('div');
    action.className = 'card-action';

    card.appendChild(action);

    const title = document.createElement('span');
    title.className = 'card-title';

    title.appendChild(
      document.createTextNode(deck.name)
    );

    content.appendChild(title);

    const body = document.createElement('p');

    body.appendChild(
      document.createTextNode(`Side A: ${deck.sideA}, Side B: ${deck.sideB}`)
    );

    content.appendChild(body);

    const openLink = document.createElement('a');
    openLink.href = `?deck=${deck.name}&side=a&card=0`;

    action.appendChild(openLink);

    openLink.appendChild(
      document.createTextNode('Open Deck')
    );

    const openShuffledLink = document.createElement('a');
    openShuffledLink.href = `?deck=${deck.name}&mode=shuffled`;

    action.appendChild(openShuffledLink);

    openShuffledLink.appendChild(
      document.createTextNode('Open Shuffled Deck')
    );
  });
};

export { renderDeckList };
