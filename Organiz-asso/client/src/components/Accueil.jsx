import React from 'react';

export default function Accueil({
  utilisateur,
  onVoirForum,
  onVoirInscriptions,
  onVoirGestionAdmins,
  onVoirAmis,
  onVoirRecherche
}) {
  return (
    <div className="main-container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Bienvenue, {utilisateur.firstname || utilisateur.login} !</h1>
        <p>Que voulez-vous faire aujourd’hui ?</p>

        <button
          className="btn btn-primary btn-large"
          onClick={onVoirForum}
        >
          ▶ Voir les forums
        </button>
      </div>

      {utilisateur.admin ? (
        <div className="card card-grid">
          <div>
            <h3>Gestion des inscriptions</h3>
            <button
              className="btn btn-secondary"
              onClick={onVoirInscriptions}
            >
              ▶ Gérer les inscriptions
            </button>
          </div>
          <div>
            <h3>Gestion des administrateurs</h3>
            <button
              className="btn btn-secondary"
              onClick={onVoirGestionAdmins}
            >
              ▶ Gérer les admins
            </button>
          </div>
          <div>
            <h3>Recherche de messages</h3>
            <button
              className="btn btn-secondary"
              onClick={onVoirRecherche}
            >
              ▶ Rechercher
            </button>
          </div>
        </div>
      ) : (
        <div className="card card-grid">
          <div>
            <h3>Mes amis</h3>
            <button
              className="btn btn-secondary"
              onClick={onVoirAmis}
            >
              ▶ Voir mes amis
            </button>
          </div>
          <div>
            <h3>Recherche de messages</h3>
            <button
              className="btn btn-secondary"
              onClick={onVoirRecherche}
            >
              ▶ Rechercher
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
