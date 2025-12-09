# 🏛️ Organiz-asso — Plateforme Web Associative

![Status](https://img.shields.io/badge/status-completed-brightgreen)
![Stack](https://img.shields.io/badge/stack-MERN-blue)
![Context](https://img.shields.io/badge/context-university%20project-orange)

## 📌 Présentation

**Organiz-asso** est une application web permettant la gestion et l’animation d’une association à travers un système de forums, de rôles utilisateurs et d’administration centralisée.

Le projet met l’accent sur :
- la **modélisation logicielle**
- la **séparation client / serveur**
- la **gestion des droits et rôles**
- l’interaction avec une **base de données NoSQL**

---

## 🎯 Objectifs Fonctionnels

- Gestion des comptes utilisateurs (inscription, connexion, déconnexion)
- Validation des inscriptions par des administrateurs
- Forums de discussion :
  - 🟢 **Forum ouvert** accessible à tous les membres
  - 🔒 **Forum fermé** réservé aux administrateurs
- Publication, consultation et suppression de messages
- Recherche de messages par :
  - mots-clés
  - auteur
  - intervalle de temps
- Gestion des rôles (membre / administrateur)

---

## 🧱 Architecture du Projet

### Frontend (Client)
- React
- Axios (communication API)
- Application SPA
- Dossier `build/` fourni pour la production

### Backend (Serveur)
- Node.js
- Express
- MongoDB avec Mongoose
- Gestion des sessions et des rôles
- API REST sécurisée

### Base de Données
- Utilisateurs (statut, rôle, profil)
- Messages (contenu, auteur, date)
- Forums (ouvert / fermé)

---

## 🔐 Sécurité & Contrôle d’Accès

- Authentification par session
- Contrôle des accès selon le rôle utilisateur
- Restrictions strictes sur :
  - le forum administrateur
  - la validation des comptes
  - la gestion des privilèges

---

## ⚙️ Technologies & Outils

- **Langages** : JavaScript
- **Frontend** : React
- **Backend** : Node.js, Express
- **Base de données** : MongoDB
- **Architecture** : Client / Serveur
- **Outils** : npm, Git, GitHub

---

## 📂 Structure Générale
Organiz-asso/
│
├── client/ # Frontend React
├── serveur/ # Backend Node.js / Express
├── build/ # Version production du client
├── README.md


---

## 🎓 Contexte Académique

Projet réalisé dans le cadre de l’UE **Technologies du Web**, portant sur :
- la modélisation d’un système web
- la conception d’API
- la gestion des interactions client–serveur
- la structuration d’une base de données

---

## ✅ État du Projet

✔ Fonctionnel  
✔ Architecture complète  
✔ Conforme au cahier des charges  
✔ Prêt à être présenté (CV / entretien)


