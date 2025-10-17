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
import Goldmine from './Juegos/IFRAMES/diamond/diamonds.jsx';
import Solitario from './Juegos/IFRAMES/Solitario/solitario.jsx';
import Geo from './Juegos/IFRAMES/GEO/Geo.jsx';
import Outcome from './Juegos/IFRAMES/Outcome/outcome.jsx';
import Motaza from './Juegos/IFRAMES/Motitoorigi/motaza.jsx';
import Basket from './Juegos/IFRAMES/Basket/Basket.jsx';
import CrazyH from './Juegos/IFRAMES/HEN/CrazyHen.jsx';
import CUT from './Juegos/IFRAMES/Cut/CUT.jsx';
import RISE from './Juegos/IFRAMES/RISE/RISE.jsx';
import MAFIA from './Juegos/IFRAMES/MAFIA/MAFIA.jsx';
import CHEF from './Juegos/IFRAMES/CHEF/CHEF.jsx';

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
      <Link to="/Motaza">
        <BtnJ nombre="MOTO X3M" imgSrc="/img/MotoX3mTeaser.jpg" />
      </Link>
      <Link to="/Tmesa">
        <BtnJ nombre="Tenis de Mesa" imgSrc="/img/TableTennis_WorldTour_Teaser.jpg" />
      </Link>
      <Link to="/Archery">
        <BtnJ nombre="Archery World Tour" imgSrc="/img/ArcheryWorldTourTeaser.jpg" />
      </Link>
      <Link to="/Goldmine">
        <BtnJ nombre="GOLD MINE" imgSrc="/img/GoldMineTeaser.jpg" />
      </Link>
      <Link to="/Solitario">
        <BtnJ nombre="SOLITARIO" imgSrc="/img/SolitaireKlondikeTeaser.jpg" />
      </Link>
      <Link to="/Geo">
        <BtnJ nombre="GEO QUIZ Europe" imgSrc="/img/GeoQuizEuropeTeaser.jpg" />
      </Link>
      <Link to="/Outcome">
        <BtnJ nombre="OUTCOME" imgSrc="/img/OutcomeTeaser.jpg" />
      </Link>
      <Link to="/Basket">
        <BtnJ nombre="BASKET & BALL" imgSrc="/img/BasketAndBall_Teaser.jpg" />
      </Link>
       <Link to="/CrazyH">
        <BtnJ nombre="CRAZY HEN LEVEL" imgSrc="/img/CrazyHenLevelTeaser.jpg" />
      </Link>
      <Link to="/CUT">
        <BtnJ nombre="CUT THE ROPE" imgSrc="/img/CutTheRopeTeaser.jpg" />
      </Link>
      <Link to="/RISE">
        <BtnJ nombre="RISE UP" imgSrc="/img/RiseUpTeaser.jpg" />
      </Link>
      <Link to="/MAFIA">
        <BtnJ nombre="MAFIA POKER" imgSrc="/img/MafiaPokerTeaser.jpg" />
      </Link>
      <Link to="/CHEF">
        <BtnJ nombre="HIPPO CHEF" imgSrc="/img/HippoPizzaChefTeaser.jpg" />
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
          <Route path="/Motaza" element={<Motaza/>} />
          <Route path="/Tmesa" element={<Tmesa/>} />
          <Route path="/Archery" element={<Archery/>} />
          <Route path="/Goldmine" element={<Goldmine/>} />
          <Route path="/Solitario" element={<Solitario/>} />
          <Route path="/Geo" element={<Geo/>} />
          <Route path="/Outcome" element={<Outcome/>} />
          <Route path="/Basket" element={<Basket/>} />
          <Route path="/CrazyH" element={<CrazyH/>} />
          <Route path="/CUT" element={<CUT/>} />
          <Route path="/RISE" element={<RISE/>} />
          <Route path="/MAFIA" element={<MAFIA/>} />
          <Route path="/CHEF" element={<CHEF/>} />
        </Routes>
      </main>
    </div>
  );
}


