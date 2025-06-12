import React from 'react';
export default function Deconnexion({ onDeconnexion }) {
  return (
    <div className="card">
      <button onClick={onDeconnexion}>Se déconnecter</button>
    </div>
  );
}
