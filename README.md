# Organiz-asso — Plateforme de Gestion Associative

> **Projet Universitaire** | Master Informatique - Université Côte d'Azur

## 📌 Présentation

**Organiz-asso** est une plateforme web complète conçue pour gérer la vie numérique d'une association.

L'objectif était de créer une application **robuste** en utilisant une architecture **Fullstack** : nous avons séparé clairement l'interface utilisateur (le client) de toute la logique et la gestion des données (le serveur). Le point central de la conception est la **gestion stricte des rôles (RBAC)** pour différencier les Membres des Administrateurs.
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

## 🛠️ Outils Techniques Utilisés (Stack)

Ce projet est basé sur la stack **MERN** (MongoDB, Express, React, Node.js).

* **Interface (Frontend)** : Nous avons utilisé **React.js** pour développer une interface dynamique (SPA - Single Page Application).
* **Logique Serveur (Backend)** : Le "cerveau" de l'application est géré par **Node.js** et le framework **Express**, qui expose une **API REST** sécurisée.
* **Base de Données** : Toutes les données sont stockées dans **MongoDB**, une base de données flexible de type **NoSQL**.
* **Modélisation** : Nous avons utilisé **Mongoose** comme outil de modélisation des données.

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
```

### 2. Lancement du projet
Deux modes de lancement sont possibles.
#### Option A : Mode Unifié (Recommandé)
Si "concurrently" est configuré, lancez le frontend et le backend en une seule commande depuis la racine du projet :
```bash
npm run dev
```
#### Option B : Mode Manuel
Ouvrez deux terminaux séparés :
```bash
# Terminal 1
cd server && npm start
# Terminal 2
cd client && npm start
```
