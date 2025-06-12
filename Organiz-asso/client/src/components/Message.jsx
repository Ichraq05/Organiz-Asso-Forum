import React from 'react';
import axios from 'axios';

export default function Message({
  message,
  utilisateur = {},
  onSupprime = () => {}
}) {
  const authorId = message.userId?._id ?? message.userId;
  const peutSupprimer =
    utilisateur._id &&
    (authorId === utilisateur._id || utilisateur.admin);

  const supprime = async () => {
    try {
      await axios.delete(`/message/${message._id}`,{
        data:{ userId:utilisateur._id, isAdmin:utilisateur.admin }
      });
      onSupprime(message._id);
    } catch {
      alert('Impossible de supprimer');
    }
  };

  return (
    <div
      style={{
        position:'relative',
        padding:'1rem',
        border:'1px solid #ccc',
        borderRadius:8,
        margin:'0.5rem 0'
      }}
    >
      {peutSupprimer && (
        <button
          onClick={supprime}
          className="delete-button"
          title="Supprimer"
        >
          🗑
        </button>
      )}
      {message.title && <h4>{message.title}</h4>}
      <p>
        <strong>{message.userId?.login}</strong> –{' '}
        <em>{new Date(message.timestamp).toLocaleString()}</em>
      </p>
      <p>{message.content}</p>
    </div>
  );
}
