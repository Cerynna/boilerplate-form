# Boilerplate Form

Un boilerplate simple pour créer un formulaire anonyme, flexible et dynamique.  
Ajoute autant de champs que tu veux à la volée, sans limitation !

---

## 🚀 Configuration

### 1. Obtenir ta clé API Google

- Va sur [Google Cloud Console - API Credentials](https://console.cloud.google.com/apis/credentials)  
- Clique sur **Create Credentials** > **API key**  
- Copie ta clé API dans le fichier `.env`

---

### 2. Préparer ton Google Sheet

- Crée un Google Sheet ici : [https://docs.google.com/spreadsheets/u/0/](https://docs.google.com/spreadsheets/u/0/)  
- Partage-le en lecture à : **« Tous les utilisateurs ayant le lien »**  
- Récupère l’ID de ta feuille dans l’URL (entre `/d/` et `/edit`)  
- Colle cet ID dans le `.env`

---

### 3. Configurer la feuille

- Note le nom de la feuille (onglet) que tu souhaites utiliser  
- Ajoute ce nom dans ton `.env`

---

### 4. Déployer le script Apps Script

- Ouvre ton Google Sheet  
- Va dans **Extensions > Apps Script**  
- Remplace le contenu de `Code.gs` par celui fourni dans le dossier `AppsScript/Code.gs` de ce projet  
- Publie ton script en tant qu’**Application Web** :  
  - Description : `Webhook AddRow`  
  - Exécuter l’application en tant que : **Toi**  
  - Accès : **Tout le monde, même anonymes**

- Copie l’URL générée dans ton fichier `.env`

---

## 🌐 Hébergement

Ce projet utilise **gh-pages** pour héberger le site statique.

---

## 🎉 Tu es prêt·e !

Lance l’application localement ou en ligne et collecte des réponses anonymes directement dans ta Google Sheet.

---

Besoin d’aide ou d’une feature ? N’hésite pas à ouvrir une issue !