import React, { useState } from "react";
import "./ppt.css"

export function PPT() { 
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const opciones = ["Piedra", "Papel", "Tijeras"];

  function handlePlay(opcion) {
    setPlayerChoice(opcion);
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    const eleccionCPU = opciones[indiceAleatorio];
    setComputerChoice(eleccionCPU);

    if (opcion === eleccionCPU) setResult("Empate");
    else if (
      (opcion === "Piedra" && eleccionCPU === "Tijeras") ||
      (opcion === "Papel" && eleccionCPU === "Piedra") ||
      (opcion === "Tijeras" && eleccionCPU === "Papel")
    ) setResult("Ganaste!");
    else setResult("Perdiste!");
  
  }

  return (
    <div>
      <h1>PIEDRA, PAPEL Y TIJERA</h1>
      <button onClick={() => handlePlay("Piedra")}>Piedra</button>
      <button onClick={() => handlePlay("Papel")}>Papel</button>
      <button onClick={() => handlePlay("Tijeras")}>Tijeras</button>

      <p>Tu elección: {playerChoice}</p>
      <p>CPU: {computerChoice}</p>
      <h2>{result}</h2>
    </div>
  );
}