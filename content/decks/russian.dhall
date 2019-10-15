let Deck = ../types/Deck.dhall
let Card = ../types/Card.dhall
let deck : Deck = {
  name = "Russian",
  sideA = "Russian Word",
  sideB = "English Translation",
  cards = [
    { sideA = "отец", sideB = "Father" }
  , { sideA = "папа", sideB = "Dad" }
  , { sideA = "мать", sideB = "Mother" }
  , { sideA = "Мама", sideB = "Mom" }
  ]
}

in deck
