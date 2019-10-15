let Deck = ../types/Deck.dhall
let deck : Deck = {
  name = "Greek",
  sideA = "Greek Word",
  sideB = "English Translation",
  cards = [
    { sideA = "γεια σας",  sideB = "Hello" }
  , { sideA = "αντιο σας", sideB = "Goodbye" }
  , { sideA = "πατέρας",   sideB = "Father" }
  , { sideA = "μητέρα",    sideB = "Mother" }
  ]
}

in deck
