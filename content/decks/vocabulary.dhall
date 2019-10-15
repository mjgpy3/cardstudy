let Deck = ../types/Deck.dhall
let Card = ../types/Card.dhall
let deck : Deck = {
  name = "Vocabulary",
  sideA = "Word",
  sideB = "Definition",
  cards = [
  { sideA = "Idyll",     sideB = "A short poem or prose piece depicting a rural or pastoral scene, usually in idealized terms" }
, { sideA = "Amorous",   sideB = "Full of or strongly disposed to romantic love" }
, { sideA = "Dowager",   sideB = "(1) A widow who holds a title or property derived from her deceased husband (2) an elderly woman of high social station" }
, { sideA = "Phalanx",   sideB = "A compact or close-knit body of people" }
, { sideA = "Apropos",   sideB = "Fitting and to the point" }
, { sideA = "Charabanc", sideB = "A bus typically used for sightseeing, originally open and pulled by horses" }
, { sideA = "Dacha",     sideB = "A Russian country house or villa" }
  ]
}

in deck
