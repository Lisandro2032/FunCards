import React from 'react';
import Header from './componentes/Header';
import CardGame from './Juegos/CardGame';

export default function App(){
  return (
    <div className="app">
      <Header title="FunCards" />
      <main className="container">
        <h2>Juegos</h2>
        {/* Por ahora mostramos el CardGame directamente */}
        <CardGame />
      </main>
    </div>
  );
}