import decks from './decks.json';
import { renderDeckList } from './deckList';
import { renderCard, renderShuffledCard } from './card';

window.addEventListener('DOMContentLoaded', event => {
  const pieces = window.location.href.split('?');
  const queryParams = (pieces[1] || '')
    .split('&')
    .map(pair => pair.split('='))
    .reduce((res, [key, value]) => {
      res[key] = value;
      return res;
    }, {});

  if ('deck' in queryParams && 'side' in queryParams && 'card' in queryParams) {
    renderCard({
      deck: queryParams['deck'],
      side: queryParams['side'],
      card: parseInt(queryParams['card']),
      mode: queryParams['shuffled']
    });
  } else if ('mode' in queryParams && queryParams['mode'] === 'shuffled') {
    renderShuffledCard({
      deck: queryParams['deck']
    });
  } else {
    renderDeckList();
  }
});
