import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function RechercheAmis({ onSelect }) {
  const [critere, setCritere] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!critere) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await axios.get('/user/all');
        const list = res.data.users.filter(u =>
          u.login.toLowerCase().includes(critere.toLowerCase()) ||
          (u.firstname && u.firstname.toLowerCase().includes(critere.toLowerCase())) ||
          (u.lastname && u.lastname.toLowerCase().includes(critere.toLowerCase()))
        );
        setSuggestions(list);
      } catch (err) {
        console.error('Recherche amis échouée', err);
      }
    };
    fetchUsers();
  }, [critere]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = user => {
    setCritere(user.login);
    setSuggestions([]);
    onSelect(user);   
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <input
        type="text"
        value={critere}
        onChange={e => setCritere(e.target.value)}
        placeholder="Rechercher amis..."
      />
      {suggestions.length > 0 && (
        <ul style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#fff', border: '1px solid #ccc',
          maxHeight: 200, overflowY: 'auto', zIndex: 1000,
          margin:0, padding:0, listStyle:'none'
        }}>
          {suggestions.map(u => (
            <li
              key={u._id}
              onClick={() => handleSelect(u)}
              style={{ padding:'0.5rem', cursor:'pointer' }}
            >
              {u.login} — {u.firstname} {u.lastname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
