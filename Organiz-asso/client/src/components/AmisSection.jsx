import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RechercheAmis from './RechercheAmis';

export default function AmisSection({ utilisateur }) {
  const [amis, setAmis] = useState([]);
  const [requests, setReqs] = useState([]);
  const [cibleUser, setCibleUser] = useState(null);

  useEffect(() => {
    axios.get(`/user/${utilisateur._id}/friends`)
      .then(res => setAmis(res.data.friends));
    axios.get(`/user/${utilisateur._id}/requests`)
      .then(res => setReqs(res.data.requests));
  }, [utilisateur._id]);

  const envoyer = async () => {
    if (!cibleUser) return;
    if (!utilisateur.admin && cibleUser.admin) {
      return alert("Vous ne pouvez pas demander un admin");
    }
    await axios.post(`/user/${cibleUser._id}/requests`, {
      fromId: utilisateur._id
    });
    setCibleUser(null);
  };

  const accepte = async id => {
    await axios.post(`/user/${utilisateur._id}/requests/${id}/accept`);
    setReqs(rs => rs.filter(u => u._id !== id));
    const res = await axios.get(`/user/${utilisateur._id}/friends`);
    setAmis(res.data.friends);
  };

  const refuse = async id => {
    await axios.post(`/user/${utilisateur._id}/requests/${id}/decline`);
    setReqs(rs => rs.filter(u => u._id !== id));
  };

  return (
    <div className="card">
      <h2>Amis</h2>

      <h3>Envoyer une demande</h3>
      <RechercheAmis onSelect={user => setCibleUser(user)} />
      <button
        className="btn btn-primary"
        onClick={envoyer}
        disabled={!cibleUser}
      >
        Ajouter
      </button>

      <h3>Demandes reçues</h3>
      {requests.map(u => (
        <div
          key={u._id}
          style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'0.5rem' }}
        >
          <span>{u.login}</span>
          <button
            className="btn btn-primary"
            onClick={() => accepte(u._id)}
          >
            ✔
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => refuse(u._id)}
          >
            ✖
          </button>
        </div>
      ))}

      <h3>Ma liste d’amis</h3>
      {amis.map(a => (
        <div key={a._id}>
          {a.login} — {a.firstname} {a.lastname}
        </div>
      ))}
    </div>
  );
}
