import React from 'react';
import { Link } from "react-router-dom";
export default function Header({ title }){ 

  return (
    <header className="site-header">
      <div className="brand">{title}</div>
      <nav>
        <Link to="/">
        <button className="btn">Home</button> 
        </Link>
        <Link to="/Settings">
        <button className="btn">Settings</button>
        </Link>
        <button className="btn">🔍</button>
      </nav>
    </header>
  );
}