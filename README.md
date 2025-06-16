# Boilerplate Form

Ce Boilerplate a pour but de crée un formulaire anonyme.
Pas de limitation d'input avec un Form qui peu crée des inputs a la volé.

## Config
Crée un clé API https://console.cloud.google.com/apis/credentials > Create credential > API keys
Copier la clé API dans le .env

Crée un Gsheet => https://docs.google.com/spreadsheets/u/0/
Mettre ce Gsheet en "Tous les utilisateurs qui ont le lien" > Lecteur

Dans l'URL du Gsheet récupéré l'ID https://docs.google.com/spreadsheets/d/********
La coller dans le .env

Il faut aussi mettre le nom de la feuille dans le .env

Puis aller dans AppScript (Extensions > AppsScript)
Dans Code.gs copier ce qui est fourni dans le dossier AppsScript/Code.gs
Déployer le script
Application Web
Description > Webhook AddRow
Exécuter en tant que > Moi
Qui a accès > Tout le monde

Copier l'URL dans le fichier .env

