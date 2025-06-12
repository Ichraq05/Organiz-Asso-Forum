import React, { useState, useRef, useEffect } from 'react';

export default function Entete({
  utilisateur,
  onVoirAccueil,
  onVoirProfil,
  onLogout
}) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  return (
    <header>
      <h1
        onClick={onVoirAccueil}
        style={{ cursor: 'pointer', color: '#4f46e5' }}
      >
        Organiz’Asso
      </h1>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {!utilisateur && <span>Connexion</span>}

        {utilisateur && (
          <div ref={ref} style={{ position: 'relative' }}>
            <button
              className="btn btn-link"
              onClick={() => setShowMenu(v => !v)}
              style={{ fontSize: '1.1rem', padding: '0.5rem 1rem' }}
            >
              Paramètres ▾
            </button>
            {showMenu && (
              <ul
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  background: '#fff',
                  border: '1px solid #e1e4e8',
                  borderRadius: 4,
                  listStyle: 'none',
                  padding: '0.5rem 0'
                }}
              >
                <li>
                  <button
                    className="btn btn-link"
                    onClick={onVoirProfil}
                  >
                    Profil
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-link"
                    onClick={onLogout}
                  >
                    Déconnexion
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
