let Card = ./Card.dhall
let Deck : Type = { name: Text, sideA: Text, sideB: Text, cards: List Card }
in Deck
