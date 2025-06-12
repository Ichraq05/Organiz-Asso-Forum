import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';

export default function RechercheMessages({ utilisateur }) {
  const [critere, setCritere]     = useState('');
  const [resultats, setResultats] = useState([]);

  const handleChange = async e => {
    const q = e.target.value;
    setCritere(q);
    if (!q) {
      setResultats([]);
      return;
    }
    try {
      const res = await axios.get('/message/search', { params: { q } });
      let msgs = res.data.messages;
      if (!utilisateur.admin) {
        msgs = msgs.filter(m => m.forum !== 'ferme');
      }
      setResultats(msgs);
    } catch (err) {
      console.error('Recherche message échouée', err);
      alert('Erreur lors de la recherche');
    }
  };

  const supprimeLocal = id => {
    setResultats(rs => rs.filter(m => m._id !== id));
  };

  return (
    <div className="card">
      <input
        value={critere}
        onChange={handleChange}
        placeholder="Rechercher messages..."
      />
      {resultats.map(m => (
        <div key={m._id}>
          <p><em>Forum : {m.forum}</em></p>
          <Message
            message={m}
            utilisateur={utilisateur}
            onSupprime={supprimeLocal}
          />
        </div>
      ))}
    </div>
  );
}

