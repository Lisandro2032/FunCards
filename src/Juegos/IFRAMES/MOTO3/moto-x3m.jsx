import React from "react";

export default function Motox3m() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Jugar ahora 🕹️</h2>
      <iframe
        src="https://www.crazygames.com/embed/moto-x3m" 
        width="800"
        height="600"
        style={{
          border: "3px solid #000",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)"
        }}
        title="Moto X3M"
        allowFullScreen
      ></iframe>
    </div>
  );
}
