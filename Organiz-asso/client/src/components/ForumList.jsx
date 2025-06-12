import React, { useEffect } from 'react';

export default function ForumList({ utilisateur, onSelect, onBack }) {
  useEffect(() => {
    if (!utilisateur.admin) {
      onSelect('ouvert');
    }
  }, [utilisateur, onSelect]);

  if (!utilisateur.admin) return null;

  return (
    <div className="card">
      <button
        className="btn btn-secondary back-button"
        onClick={onBack}
      >
        ← Retour
      </button>

      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
        Choisissez un forum
      </h2>

      <div className="forum-choices">
        <button
          className="btn btn-primary btn-large"
          onClick={() => onSelect('ouvert')}
        >
          Forum ouvert
        </button>
        <button
          className="btn btn-primary btn-large"
          onClick={() => onSelect('ferme')}
        >
          Forum fermé
        </button>
      </div>
    </div>
  );
}
