import React from 'react';
import Header from './componentes/Header';
import CardGame from './Juegos/CardGame';
import Settings from "./componentes/Settings";
import { BtnJ } from './componentes/BotonJ';
import TicTacToe from './Juegos/CardGame/TicTacToe/Index';
import { PPT } from "./Juegos/PPT";
import { Routes, Route, Link } from 'react-router-dom';
import UNO from "./Juegos/UNO/index.jsx";
import Freekickk from './Juegos/IFRAMES/DRIFT/freekick.jsx';
import POOL8 from './Juegos/IFRAMES/POOL8/8ball.jsx';
import Motito from './Juegos/IFRAMES/MOTOPOOL/motopool.jsx';
import Tmesa from './Juegos/IFRAMES/TMESA/tmesa.jsx';
import Archery from './Juegos/IFRAMES/Arco/Arco.jsx';

function Home() {
  return (
    <div>
      <h2>Bienvenido a Funcards!</h2>
    <div className='Juegos-Container'>   
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
      <Link to="/Freekickk">
        <BtnJ nombre="Free Kick 3D" imgSrc="/img/FREEKICK3D.jpg" />
      </Link>
      <Link to="/POOL8">
        <BtnJ nombre="8 BALL POOL" imgSrc="/img/8POOL.jpg" />
      </Link>
      <Link to="/Motito">
        <BtnJ nombre="MOTO X3M POOL PARTY" imgSrc="/img/MotoX3mPoolParty.jpg" />
      </Link>
      <Link to="/Tmesa">
        <BtnJ nombre="Tenis de Mesa" imgSrc="/img/TableTennis_WorldTour_Teaser.jpg" />
      </Link>
      <Link to="/Archery">
        <BtnJ nombre="Archery World Tour" imgSrc="/img/ArcheryWorldTourTeaser.jpg" />
      </Link>



    </div>
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
          <Route path="/freekickk" element={<Freekickk/>} />
          <Route path="/POOL8" element={<POOL8/>} />
          <Route path="/Motito" element={<Motito/>} />
          <Route path="/Tmesa" element={<Tmesa/>} />
          <Route path="/Archery" element={<Archery/>} />
        </Routes>
      </main>
    </div>
  );
}


