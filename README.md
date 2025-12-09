# Organiz-asso — Plateforme de Gestion Associative

> **Projet Universitaire** | Master Informatique - Université Côte d'Azur

## 📌 Présentation

**Organiz-asso** est une application web Fullstack (MERN) conçue pour digitaliser la vie d'une association. Elle centralise la gestion des membres, l'animation de la communauté via des forums et l'administration des droits d'accès.

L'objectif principal était de concevoir une **architecture logicielle robuste**, séparant clairement le client (React) du serveur (API Node.js), tout en implémentant une gestion stricte des rôles (RBAC).

---

## 📸 Aperçu de l'Application

### 1. Authentification
Système complet d'inscription et de connexion sécurisée.
<p align="center">
  <img src="./Organiz-asso/assets/Connexion.png" width="48%" alt="Page de Connexion" />
  <img src="./Organiz-asso/assets/Inscription.png" width="48%" alt="Page d'Inscription" />
</p>

### 2. Gestion des Rôles (RBAC)
L'interface s'adapte dynamiquement selon que l'utilisateur est **Administrateur** (Alice) ou **Membre** (Micheal).

| Espace Administrateur (Alice) | Espace Membre (Micheal) |
|:---:|:---:|
| <img src="./Organiz-asso/assets/Dashboard AdminAlice.png" alt="Dashboard Admin" width="100%"> | <img src="./Organiz-asso/assets/Dashboard MembreMicheal.png" alt="Dashboard Membre" width="100%"> |
| *Accès complet : Gestion inscriptions & admins.* | *Accès restreint : Forums & profil uniquement.* |

### 3. Forums de Discussion
Un espace d'échange avec lecture des fils de discussion et participation.
<p align="center">
  <img src="./Organiz-asso/assets/Liste Forum.png" width="48%" alt="Liste des sujets" />
  <img src="./Organiz-asso/assets/Détail Message.png" width="48%" alt="Détail d'une discussion" />
</p>

---

## 🛠️ Stack Technique

| Composant | Technologie | Usage |
| :--- | :--- | :--- |
| **Frontend** | React.js | SPA, Hooks (useState, useEffect), Axios |
| **Backend** | Node.js / Express | API REST, Middleware de sécurité |
| **Base de Données** | MongoDB | Base NoSQL orientée documents |
| **Outils** | Mongoose, Git | Modélisation des données (ODM) |

---

## 🚦 Installation et Démarrage

Suivez ces étapes pour lancer le projet en local.

### 1. Pré-requis
À la racine du projet, installez les dépendances :
```bash
# Installer le serveur
cd server && npm install

# Installer le client
cd ../client && npm install
