
// import { createDeck, printDeck } from "./funcs";
// const deck = createDeck();
// printDeck(deck);


import { Deck } from "./deck";


const deck = new Deck();
deck.shuffle();
deck.print()

deck.publish()

