import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
export default function Header({ title }){

  
  return (
    <header className="site-header">
      <div className="brand">{title}</div>
      <nav>
        <button className="btn">Home</button>
        <button className="btn">Settings</button>
      </nav>
    </header>
  );
}