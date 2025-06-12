import React, { useState } from 'react';
import Entete from './components/Entete';
import PiedDePage from './components/PiedDePage';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import ProfilUtilisateur from './components/ProfilUtilisateur';
import ForumList from './components/ForumList';
import ForumView from './components/ForumView';
import ValidationInscriptions from './components/ValidationInscriptions';
import GestionAdmins from './components/GestionAdmins';
import AmisSection from './components/AmisSection';
import RechercheMessages from './components/RechercheMessages';

export default function App() {
  const [utilisateur, setUtilisateur]= useState(null);
  const [page, setPage]= useState('connexion');
  const [forumKey, setForumKey]= useState(null);

  const handleConnexion = user => {
    setUtilisateur(user);
    setPage('accueil');
  };

  const handleDeconnexion = async () => {
    await fetch('/user/logout', { method: 'DELETE', credentials: 'include' });
    setUtilisateur(null);
    setPage('connexion');
  };

  const backToAccueil = () => setPage('accueil');
  const handleVoirForum = () => setPage('forumList');
  const handleSelectForum = key => { setForumKey(key); setPage('forum'); };
  const handleVoirInscriptions = () => setPage('inscriptions');
  const handleVoirGestionAdmins= () => setPage('admins');
  const handleVoirAmis = () => setPage('amis');
  const handleVoirRecherche= () => setPage('recherche');

  return (
    <>
      <Entete
        utilisateur={utilisateur}
        onVoirAccueil={backToAccueil}
        onVoirProfil={() => setPage('profil')}
        onLogout={handleDeconnexion}
      />

      <main className="main-container">
        {page === 'connexion' && (
          <Connexion
            onConnexion={handleConnexion}
            onInscrire={() => setPage('inscription')}
          />
        )}

        {page === 'inscription' && (
          <Inscription onValide={() => setPage('connexion')} />
        )}

        {page === 'accueil' && utilisateur && (
          <Accueil
            utilisateur={utilisateur}
            onVoirForum={handleVoirForum}
            onVoirInscriptions={handleVoirInscriptions}
            onVoirGestionAdmins={handleVoirGestionAdmins}
            onVoirAmis={handleVoirAmis}
            onVoirRecherche={handleVoirRecherche}
          />
        )}

        {page === 'profil' && utilisateur && (
          <ProfilUtilisateur
            utilisateur={utilisateur}
            onRetourAccueil={backToAccueil}
          />
        )}

        {page === 'inscriptions' && utilisateur?.admin && (
          <div className="card">
            <button className="btn btn-secondary back-button" onClick={backToAccueil}>
              ← Retour
            </button>
            <ValidationInscriptions />
          </div>
        )}

        {page === 'admins' && utilisateur?.admin && (
          <div className="card">
            <button className="btn btn-secondary back-button" onClick={backToAccueil}>
              ← Retour
            </button>
            <GestionAdmins selfId={utilisateur._id} />
          </div>
        )}

        {page === 'amis' && utilisateur && (
          <div className="card">
            <button className="btn btn-secondary back-button" onClick={backToAccueil}>
              ← Retour
            </button>
            <AmisSection utilisateur={utilisateur} />
          </div>
        )}

        {page === 'recherche' && utilisateur && (
          <div className="card">
            <button className="btn btn-secondary back-button" onClick={backToAccueil}>
              ← Retour
            </button>
            <RechercheMessages utilisateur={utilisateur} />
          </div>
        )}

        {page === 'forumList' && utilisateur && (
          <ForumList
            utilisateur={utilisateur}
            onSelect={handleSelectForum}
            onBack={backToAccueil}
          />
        )}

        {page === 'forum' && utilisateur && forumKey && (
          <ForumView
            forumKey={forumKey}
            utilisateur={utilisateur}
            onBack={backToAccueil}
          />
        )}
      </main>

      <PiedDePage />
    </>
  );
}
