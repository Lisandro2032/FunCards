import React from "react";

export default function GameFrame({ titulo, src, width = 800, height = 600 }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>{titulo} 🕹️</h2>
      <iframe
        src={src}
        width={width}
        height={height}
        style={{
          border: "3px solid #000",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
        titulo={titulo}
        allowFullScreen
      ></iframe>
    </div>
  );
}