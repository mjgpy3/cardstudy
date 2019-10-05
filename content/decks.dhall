let Deck = ./types/Deck.dhall
let decks : List Deck = [
  ./decks/greek.dhall
, ./decks/quotes.dhall
]

in decks
