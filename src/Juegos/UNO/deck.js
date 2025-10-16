const colors = ["red", "green", "blue", "yellow"];


const normalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialValues = ["🛇", "🔃", "+2"];

let idCounter = 0;

export function createDeck() {
  let deck = [];

  
  for (const color of colors) {
    
    deck.push({ id: idCounter++, color, value: "0" });

    
    [...normalValues.slice(1), ...specialValues].forEach(value => {
      deck.push({ id: idCounter++, color, value });
      deck.push({ id: idCounter++, color, value });
    });
  }

 
  for (let i = 0; i < 4; i++) {
    deck.push({ id: idCounter++, color: "black", value: "wild" });
    deck.push({ id: idCounter++, color: "black", value: "+4" });
  }

  return deck;
}


export function shuffle(deck) {
  return [...deck].sort(() => Math.random() - 0.5);
}