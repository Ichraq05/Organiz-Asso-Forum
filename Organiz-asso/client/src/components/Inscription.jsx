import React, { useState } from 'react';
import axios from 'axios';

export default function Inscription({ onValide }) {
  const [login, setLogin]       = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname]   = useState('');

  const submit = async e => {
    e.preventDefault();
    try {
      await axios.put('/user', {
        login, password, confirm, firstname, lastname
      });
      alert('Inscription enregistrée');
      onValide();
    } catch (err) {
      alert(err.response?.data?.message || 'Erreur inscription');
    }
  };

  return (
    <div className="card">
      <h2>Inscription</h2>
      <form onSubmit={submit}>
        <label>
          Login
          <input value={login} onChange={e=>setLogin(e.target.value)} />
        </label>
        <label>
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirmation
          <input
            type="password"
            value={confirm}
            onChange={e=>setConfirm(e.target.value)}
          />
        </label>
        <label>
          Prénom
          <input
            value={firstname}
            onChange={e=>setFirstname(e.target.value)}
          />
        </label>
        <label>
          Nom
          <input
            value={lastname}
            onChange={e=>setLastname(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          S’inscrire
        </button>
      </form>
    </div>
  );
}
