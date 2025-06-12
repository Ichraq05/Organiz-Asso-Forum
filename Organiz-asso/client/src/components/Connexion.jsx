import React, { useState } from 'react';
import axios from 'axios';

export default function Connexion({ onConnexion, onInscrire }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/login', { login, password });
      onConnexion(res.data.user);
    } catch (err) {
      alert(err.response?.data?.message || 'Erreur connexion');
    }
  };

  return (
    <div className="card">
      <h2>Connexion</h2>
      <form onSubmit={submit}>
        <label>
          Login
          <input
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
        </label>
        <label>
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>
      <p className="form-footer">
        Pas encore membre ?{' '}
        <button className="btn-link" onClick={onInscrire}>
          S’inscrire
        </button>
      </p>
    </div>
  );
}
