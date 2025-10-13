import React from 'react';
import Header from './componentes/Header';
import CardGame from './Juegos/CardGame';
import TicTacToe from './Juegos/CardGame/TicTacToe/Index';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Bienvenido a FunCards 🎴</h2>   
      <Link to="/cardgame">
        <button className="btnhome">Jugar al Memory</button>
      </Link>
      <Link to="/TicTacToe">
        <button className="btnhome">Jugar al TicTacToe</button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header title="FunCards" />
      <main className="container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardgame" element={<CardGame />} />
          <Route path="/TicTacToe" element={<TicTacToe/>} />
        </Routes>
      </main>
    </div>
  );
}
