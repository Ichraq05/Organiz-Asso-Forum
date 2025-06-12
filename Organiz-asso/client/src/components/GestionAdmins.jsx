import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GestionAdmins({ selfId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/user/all')
      .then(res => setUsers(res.data.users))
      .catch(console.error);
  }, []);

  const toggleAdmin = async id => {
    await axios.post(`/user/${id}/toggleAdmin`);
    setUsers(u => u.map(x =>
      x._id === id ? { ...x, admin: !x.admin } : x
    ));
  };

  return (
    <div>
      {users.map(u => (
        <div key={u._id} style={{ marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'1rem' }}>
          <span>{u.login}</span>
          {u._id !== selfId && (
            <button
              className="btn btn-primary"
              onClick={() => toggleAdmin(u._id)}
            >
              {u.admin ? 'Retirer admin' : 'Nommer admin'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
