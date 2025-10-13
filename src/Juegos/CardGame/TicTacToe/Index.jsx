import React, { useEffect, useState } from "react";
import "./TicTacToe.css";
const LINES = [
  [0,1,2],[3,4,5],[6,7,8], // filas
  [0,3,6],[1,4,7],[2,5,8], // columnas
  [0,4,8],[2,4,6]          // diagonales
];

function checkWinner(board) {
  for (const [a,b,c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' o 'O'
    }
  }
  return board.every(Boolean) ? "tie" : null;
}

function getRandomMove(board) {
  const empties = board.map((v,i)=> v ? null : i).filter(v=>v!==null);
  if (!empties.length) return null;
  return empties[Math.floor(Math.random()*empties.length)];
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X"); // X siempre empieza
  const [winner, setWinner] = useState(null); // 'X' | 'O' | 'tie' | null
  const [mode, setMode] = useState("pvp"); // 'pvp' or 'cpu'
  const [scores, setScores] = useState({ X: 0, O: 0, tie: 0 });

  // cargar scores de localStorage al inicio
  useEffect(()=> {
    try {
      const raw = localStorage.getItem("tictactoe-scores");
      if (raw) setScores(JSON.parse(raw));
    } catch(e){}
  }, []);

  // guardar scores cuando cambian
  useEffect(()=> {
    try { localStorage.setItem("tictactoe-scores", JSON.stringify(scores)); } catch(e){}
  }, [scores]);

  // efecto: si modo cpu y es turno O (que será la CPU), que haga movimiento
  useEffect(()=> {
    if (mode === "cpu" && !winner && turn === "O") {
      const id = setTimeout(()=> {
        const move = getRandomMove(board);
        if (move !== null) playAt(move);
      }, 450); // pequeña pausa
      return ()=> clearTimeout(id);
    }
  }, [mode, turn, board, winner]);

  useEffect(()=> {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
      setScores(prev => ({ ...prev, [result]: (prev[result] || 0) + 1 }));
    }
  }, [board]);

  function playAt(index) {
    if (board[index] || winner) return;
    setBoard(prev => {
      const next = [...prev];
      next[index] = turn;
      return next;
    });
    setTurn(prev => prev === "X" ? "O" : "X");
  }

  function handleClick(i) {
    // en modo cpu, impedir clicks si es turno CPU (O)
    if (mode === "cpu" && turn === "O") return;
    playAt(i);
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  }

  function resetScores() {
    setScores({ X:0, O:0, tie:0 });
    try { localStorage.removeItem("tictactoe-scores"); } catch(e){}
  }

  return (
    <div className="tictactoe">
      <div className="tt-header">
        <h3>Tic-Tac-Toe</h3>
        <div className="modes">
          <label>
            <input type="radio" name="mode" checked={mode==="pvp"} onChange={()=> { resetBoard(); setMode("pvp"); }} />
            2 Jugadores
          </label>
          <label>
            <input type="radio" name="mode" checked={mode==="cpu"} onChange={()=> { resetBoard(); setMode("cpu"); }} />
            vs CPU
          </label>
        </div>
      </div>

      <div className="status">
        {winner ? (
          winner === "tie" ? "Empate" : `Ganador: ${winner}`
        ) : (
          `Turno: ${turn}`
        )}
      </div>

      <div className="board">
        {board.map((val, i)=> (
          <button key={i} className={`cell ${val ? "filled" : ""}`} onClick={()=> handleClick(i)}>
            {val}
          </button>
        ))}
      </div>

      <div className="controls">
        <button className="btn" onClick={resetBoard}>Reiniciar tablero</button>
        <button className="btn" onClick={resetScores}>Resetear puntuaciones</button>
      </div>

      <div className="scores">
        <div>X: {scores.X}</div>
        <div>O: {scores.O}</div>
        <div>Empates: {scores.tie}</div>
      </div>
    </div>
  );}
