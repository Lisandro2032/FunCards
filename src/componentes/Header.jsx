import React from 'react';

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