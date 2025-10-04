import React from 'react';
import Header from './componentes/Header';
import CardGame from './Juegos/CardGame';
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
export default function App(){
  

  function Home() {
    return(
      <div>
        <h2>Bienvenido a FunCards 🎴</h2>
      {/* Botón que lleva al juego de cartas */}
      <Link to="/cardgame">
        <button className="btn">Jugar al Memory</button>
      </Link>
      </div>
    )
  }
  
  
  
  return (
    <div className="app">
      <Header title="FunCards" />
      <main className="container">
        <h2>Juegos</h2>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardgame" element={<CardGame />} />
        </Routes>
        </BrowserRouter>
        
      </main>
    </div>
  );
}