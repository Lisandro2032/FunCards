import React from 'react';
import Header from './componentes/Header';
import CardGame from './Juegos/CardGame';
import Settings from "./componentes/Settings";
import { BtnJ } from './componentes/BotonJ';
import TicTacToe from './Juegos/CardGame/TicTacToe/Index';
import { PPT } from "./Juegos/PPT";
import { Routes, Route, Link } from 'react-router-dom';
import UNO from "./Juegos/UNO/index.jsx";
import Motox3m from "./Juegos/IFRAMES/MOTO3/motito.jsx";
function Home() {
  return (
    <div className='Juegos-Container'>
      <h2>Bienvenido a FunCards 🎴</h2>   
      <Link to="/cardgame">
        <BtnJ nombre="Memoria" imgSrc="/img/memory-game.png" />
      </Link>
      <Link to="/TicTacToe">
        <BtnJ nombre="TicTacToe" imgSrc="/img/TICTACTOE.png" />
      </Link>
      <Link to="/PPT">
        <BtnJ nombre="Piedra, Papel, Tijeras" imgSrc="/img/PPT.jpg" />
      </Link>
      <Link to="/UNO">
        <BtnJ nombre="UNO" imgSrc="/img/UNO.jpg" />
      </Link>
      <Link to="/motox3m">
  <BtnJ nombre="MOTOX3M" imgSrc="/img/moto-x3m.avif" />
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
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
          <Route path="/cardgame" element={<CardGame />} />
          <Route path="/TicTacToe" element={<TicTacToe/>} />
          <Route path="/PPT" element={<PPT />} />
          <Route path="/uno" element={<UNO />} />
          <Route path="/motox3m" element={<Motox3m />} />

        </Routes>
      </main>
    </div>
  );
}


