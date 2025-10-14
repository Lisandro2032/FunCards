import React from "react";
import "/src/Estilos/BotonJ.css";

export function BtnJ({ nombre, imgSrc = "/img/memory-game.png" }) {
  return (
    <button className="Juego">
      <img className="imgj"src={imgSrc} alt={`Foto de ${nombre}`} />
      <h4>{nombre}</h4>
    </button>
  );
}