let Deck = ../types/Deck.dhall
let deck : Deck = {
  name = "Quotes",
  sideA = "Quote",
  sideB = "Author",
  cards = [
    { sideA = "Where is fancy bred? In the heart or in the road?", sideB = "Willy Wonka" }
  , { sideA = "If the Good Lord had intended us to walk he wouldn't have inveted roller skates", sideB = "Willy Wonka" }
  ]
}

in deck
