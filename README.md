# 🏛️ Organiz-asso — Plateforme de Gestion Associative

> **Projet Universitaire** | - Sorbonne Université

## 📌 Présentation

**Organiz-asso** est une application web Fullstack (MERN) destinée à la gestion d'une association. Elle permet de digitaliser les interactions entre les membres et l'administration via un système de forums sécurisés et une gestion fine des droits utilisateurs.

L'objectif de ce projet était de concevoir une architecture robuste séparant le client (React) du serveur (Node/Express) et de modéliser une base de données NoSQL adaptée aux besoins associatifs.

## 📸 Aperçu

![Aperçu de l'application](https://via.placeholder.com/800x450?text=Ajouter+une+Capture+d'%C3%A9cran+Ici)
*(Ajoute une capture d'écran de ta page d'accueil ici pour rendre le projet vivant)*

---

## 🚀 Fonctionnalités Clés

### 👤 Gestion des Utilisateurs
* **Authentification sécurisée** : Inscription et connexion.
* **Système de validation** : Les nouveaux inscrits doivent être validés par un administrateur pour devenir "Membre".
* **Profils** : Consultation des profils membres.

### 💬 Forums de Discussion
* 🟢 **Forum Ouvert** : Accessible à tous les membres validés pour échanger.
* 🔒 **Forum Fermé** : Espace confidentiel réservé exclusivement au Conseil d'Administration (Admins).
* **Gestion des messages** : Publication, suppression (ses propres messages ou modération admin).
* **Recherche** : Filtrage par mots-clés, auteur ou date.

### 🛡️ Administration
* Promotion/Révocation des droits d'administrateur.
* Modération des inscriptions et du contenu.

---

## 🛠️ Stack Technique

| Composant | Technologie | Usage |
| :--- | :--- | :--- |
| **Frontend** | React.js | Single Page Application (SPA), Hooks, Axios |
| **Backend** | Node.js / Express | API REST, Middleware d'authentification |
| **Base de Données** | MongoDB | Stockage NoSQL (Collections Users, Messages) |
| **Outils** | Mongoose, Git | Modélisation des données (ODM), Versionning |

---

## 🚦 Installation et Démarrage

Suivez ces instructions pour lancer le projet en local.

### 1. Pré-requis et Installation
À la racine du projet, installez les dépendances pour le client et le serveur :

```bash
# Installer le backend
cd server && npm install

# Installer le frontend
cd ../client && npm install
