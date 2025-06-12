import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';

export default function ProfilUtilisateur({ utilisateur, onRetourAccueil }) {
  const [mesMessages, setMesMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`/message/user/${utilisateur._id}`)
      .then(res => setMesMessages(res.data.messages))
      .catch(err => console.error(err));
  }, [utilisateur._id]);

  const handleSupprime = id => {
    setMesMessages(ms => ms.filter(m => m._id !== id));
  };

  return (
    <div className="card">
      <button
        className="btn btn-primary back-button"
        onClick={onRetourAccueil}
      >
        ← Retour à l’accueil
      </button>
      <h2>Mon profil</h2>
      <p>Login : {utilisateur.login}</p>
      <p>Nom : {utilisateur.firstname} {utilisateur.lastname}</p>

      <h3>Mes messages</h3>
      {mesMessages.map(m => (
        <Message
          key={m._id}
          message={m}
          utilisateur={utilisateur}
          onSupprime={handleSupprime}
        />
      ))}
    </div>
  );
}
