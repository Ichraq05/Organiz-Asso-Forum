import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ValidationInscriptions() {
  const [attentes, setAttentes] = useState([]);

  useEffect(() => {
    axios.get('/user/attentes')
      .then(res => setAttentes(res.data.users))
      .catch(console.error);
  }, []);

  const valider = async id => {
    await axios.post(`/user/${id}/valider`);
    setAttentes(a => a.filter(u => u._id !== id));
  };

  return (
    <div>
      {attentes.length === 0 && <p>Aucune inscription en attente.</p>}
      {attentes.map(u => (
        <div key={u._id} style={{ marginBottom: '0.5rem', display:'flex', alignItems:'center', gap:'1rem' }}>
          <span>{u.login}</span>
          <button className="btn btn-primary" onClick={() => valider(u._id)}>
            Valider
          </button>
        </div>
      ))}
    </div>
  );
}
