import React, { useEffect, useState } from 'react';
import './cardgame.css';


function shuffleArray(arr){
  return arr
    .map(v => ({ v, r: Math.random() }))
    .sort((a,b)=> a.r-b.r)
    .map(x => x.v);
}

const baseCards = ['🍎','🍌','🍇','🍒','🍋','🥝']; 

export default function CardGame(){
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]); 
  const [matched, setMatched] = useState([]);

  useEffect(()=> {
    const doubled = [...baseCards, ...baseCards];
    setDeck(shuffleArray(doubled));
    setFlipped([]);
    setMatched([]);
  }, []);

  function flipCard(i){
    if (flipped.includes(i) || matched.includes(i)) return;
    const newFlipped = [...flipped, i];
    setFlipped(newFlipped);

    if (newFlipped.length === 2){
      const [a,b] = newFlipped;
      if (deck[a] === deck[b]){
        setMatched(prev => [...prev, a, b]);
        setFlipped([]);
      } else {
        setTimeout(()=> setFlipped([]), 700);
      }
    }
  }

  function reset(){
    const doubled = [...baseCards, ...baseCards];
    setDeck(shuffleArray(doubled));
    setFlipped([]);
    setMatched([]);
  }

  return (
    <div className="cardgame">
      <div className="controls">
        <button className="btn" onClick={reset}>Reiniciar</button>
        <div>Matched: {matched.length/2}</div>
      </div>
      <div className="grid">
        {deck.map((c, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(i);
          return (
            <div key={i} className={`card ${isFlipped ? 'flipped' : ''}`} onClick={()=> flipCard(i)}>
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{c}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}