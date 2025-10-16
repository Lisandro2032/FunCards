import React, { useState, useEffect } from "react";
import { createDeck, shuffle } from "./deck";
import "./UNO.css";

export default function UNO() {
  const [deck, setDeck] = useState([]);
  const [discardTop, setDiscardTop] = useState(null);
  const [playerHand, setPlayerHand] = useState([]);
  const [botHand, setBotHand] = useState([]);
  const [turn, setTurn] = useState("player");
  const [colorChoice, setColorChoice] = useState(null);

  useEffect(() => {
    const newDeck = shuffle(createDeck());
    const playerCards = newDeck.slice(0, 7);
    const botCards = newDeck.slice(7, 14);
    const remainingDeck = newDeck.slice(14);
    const topCard = remainingDeck.shift();

    setPlayerHand(playerCards);
    setBotHand(botCards);
    setDeck(remainingDeck);
    setDiscardTop(topCard);
  }, []);

  // --- Función para robar una carta ---
  function drawCard(forBot = false, amount = 1) {
    if (deck.length === 0) return;
    const newDeck = [...deck];
    const drawn = newDeck.splice(0, amount);
    setDeck(newDeck);

    if (forBot) setBotHand(prev => [...prev, ...drawn]);
    else setPlayerHand(prev => [...prev, ...drawn]);
  }

  
  function playCard(card, isBot = false) {
    const top = discardTop;

   
    const canPlay =
      card.color === top.color ||
      card.value === top.value ||
      card.color === "black";

    if (!canPlay) {
      if (!isBot) alert("No podés jugar esa carta.");
      return;
    }

    
    if (isBot) setBotHand(prev => prev.filter(c => c.id !== card.id));
    else setPlayerHand(prev => prev.filter(c => c.id !== card.id));

    
    handleSpecialCard(card, isBot);

    setDiscardTop(card);

   
    setTurn(isBot ? "player" : "bot");
  }

  
  function handleSpecialCard(card, isBot) {
    switch (card.value) {
      case "+2":
        drawCard(!isBot, 2);
        break;
      case "+4":
        drawCard(!isBot, 4);
       
        setDiscardTop({ ...card, color: randomColor() });
        break;
      case "reverse":
        
        setTurn(isBot ? "bot" : "player");
        break;
      case "skip":
       
        setTurn(isBot ? "bot" : "player");
        break;
      case "wild":
      
        setDiscardTop({ ...card, color: randomColor() });
        break;
      default:
        break;
    }
  }

  function randomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  
  useEffect(() => {
    if (turn === "bot") {
      setTimeout(() => {
        const playable = botHand.find(
          c =>
            c.color === discardTop.color ||
            c.value === discardTop.value ||
            c.color === "black"
        );
        if (playable) playCard(playable, true);
        else drawCard(true);
      }, 1000);
    }
  }, [turn]);

  return (
    <div className="uno-container">
      <h1>UNO 🎨</h1>

<div className="bot-hand">
        <h3>Bot 🤖</h3>
        <div className="hand">
          {botHand.map(card => (
            <div key={card.id} className="card back"></div>
          ))}
        </div>
      </div>


      <div className="discard">
        <h3>Carta actual:</h3>
        {discardTop && (
          <div className={`card ${discardTop.color}`}>
            <span>{discardTop.value}</span>
          </div>
        )}
      </div>


      <div className="player-hand">
        <h3>Tu mano:</h3>
        <div className="hand">
          {playerHand.map(card => (
            <div
              key={card.id}
              className={`card ${card.color}`}
              onClick={() => turn === "player" && playCard(card)}
            >
              <span>{card.value}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => drawCard(false)}>Robar carta</button>
    </div>

    
  );
}
