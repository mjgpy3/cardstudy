let Deck = ./types/Deck.dhall
let decks : List Deck = [
  ./decks/greek.dhall
, ./decks/quotes.dhall
, ./decks/russian.dhall
, ./decks/vocabulary.dhall
]

in decks
