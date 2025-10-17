import React from "react";
import "/src/Estilos/GameFrame.css";

export default function GameFrame({ titulo, src, width = 800, height = 600 }) {
  return (
    <div className="game-frame-container">
      <h2>{titulo} 🕹️</h2>
      <div className="iframe-wrapper">
        <iframe
          src={src}
          width={width}
          height={height}
          title={titulo}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}