
[![npm version]'6.4.1']

# opendataMIASHS

L'objectif de ce projet est de créer une API en NodeJs. Parmi les missions à accomplir nous citant principalement : le croisement de sources de données sous formats différents, la création de requête serveur vers des différents Endpoints et le deployement de [Notre_Projet](http://jokegouby.herokuapp.com/index) sur Heroku .

## Getting Started

*Télécharger Node js  https://nodejs.org/fr/download/ 
  - Choisir format, système d'exploitation
* Initialiser le projet et les options de celui-ci
  - Commande npm init
* Installer la fonctionnalité express
  - Commande npm install express
* Se placer dans le dossier "my app" de notre projet
* Lancer le côté serveur
  - Commande node index.js
    1) Nécessité du module csv-express
        - Commande npm install csv-express
    2) Nécessité du module node-fetch
        - Commande npm install node-fetch
* Relancer la commande node index.js

## Consignes

-Créer un serveur Web en nodeJs hébergé sur Heroku synchronisé de Github.

-Faire un fournisseur API Web

-Avec négociation du contenu (Server Driver)

-Au moins 2 sources de données (au moins 2 formats)

-Client js fetch

-README markdown

Récupérer deux API complémentaires, créer une interface client récupérant une API générant une blague et une permettant de savoir si celle-ci est "correcte", ou plutôt discriminante. Enfin, permettre de télécharger le résultat sous deux formats (par ex : json, csv) en deux langues (par ex : français, anglais). 

## Built With

* [RapidApi](https://jokeapi.p.rapidapi.com/category/Any) - Générateur des blagues
* [RapidApi](https://text-sentiment.p.rapidapi.com/analyze) - Analyse Sentimentale
* [RapidApi](https://acobot-brainshop-ai-v1.p.rapidapi.com/get) - ChatBot

A la création du projet sur github, pensez à sélectionner un .gitignore Node

Une bonne ressource pour l'installation de Node : https://oncletom.io/node.js/v1/chapter-02/


# But de l'API

Cette API renvoie une blague ainsi que son analyse sentimentale (Positif/Neutre/Négatif). Et puis, simuler la réaction sur une telle blague en observant la réponse du ChatBot.
Elle se base sur trois autres API: une générant la blague, une autre analysant les sentiments d'une chaine de caractères et un ChatBot.

On passe donc le résultat de la première dans les deux autres. Puis, nous les restituons. 

Le serveur utilise la technologie NodeJS avec le framework Express.js ainsi que les dépendances se trouvant dans le fichier package.json.

# Liste des EndPoints de l'API

### /
Requête GET vers l'api [jokeapi](https://jokeapi.p.rapidapi.com/category/Any) Générateur des blagues.

### /joke
Requête GET vers l'api [jokeapi](https://jokeapi.p.rapidapi.com/category/Any) qui génère une blague. Cette dernière sera envoyer vers l'api [text-sentiment](https://text-sentiment.p.rapidapi.com/analyze) à fin d'avoir une analyse sentimentale qui sera transformer en emoticone.

### /joke/:category
Même principe que l'EndPoint précédent mais l'utilisateur choisi, cette fois, la catégorie de la blague (Dark, Programming ou Miscellaneou).

### /checkreaction
Requête POST vers l'api [acobot-brainshop-ai-v1](https://acobot-brainshop-ai-v1.p.rapidapi.com/get). Les résultats sont affichés et considérer une simulation du retour humain.


# Comment utiliser l'API

lien vers le projet : jokegouby.herokuapp.com/joke/

                      http://jokegouby.herokuapp.com/index

jokegouby.herokuapp.com/joke renvoie une blague, sans prendre en compte sa catégorie.

jokegouby.herokuapp.com/joke/*catégorie* renvoie une blague suivant les trois catégories possibles :
  - Dark
  - Programming
  - Miscellaneous

Exemple :
  jokegouby.herokuapp.com/joke/Dark renvoi une blague de catégorie "humour noir".
  
Les données peuvent être renvoyées ou bien en JSON ou bien en CSV.

Dans Heroku/index, vous trouverez l'exemple d'un cas client, où nous pouvons générer une ou plusieurs blague(s), obtenir le résultat de l'analyse sentimentale via un emoji, sauvegarder et télécharger le tout dans les deux formats disponibles.

Enfin, l'utilisateur peut envoyer la blague à un chatbot et recevoir la réaction de celui-ci par rapport à la blague.

# Méthodes

L'analyse sentimentale est recupéré via une requête POST, tandis que la récupération de la blague et de la réponse du chatbot sont des requêtes GET.

# API utilisées

- blagues : jokeapi.p.rapidapi.com

- analyse sentimentale : https://text-sentiment.p.rapidapi.com/analyze

- ChatBot : https://rapidapi.com/Acobot/api/brainshop-ai


# installation de node.js

node vient avec un gestionnaire de paquets pour les librairies : npm.

## sous windows
 
site de téléchargement : https://nodejs.org/fr/download/

## sous linux

En ligne de commande : apt-get install nodejs

Ou bien, vous pouvez utiliser nvm ( Node Version Manager ) qui va vous permettre de gérer différentes versions de Node sur une même machine. 

Avec nvm vous pouvez choisir quelle version utiliser par exemple, dans le dossier du projet, taper pour passer à la version 12.13 de node : nvm use 12.13

Eventuellement, nvm va vous demander d'installer la version 12.13 : nvm install 12.13

## initialisation du projet

Un projet node vient avec un fichier package.json descripteur du projet. C'est lui qui va lister les dépendances du projet et éventuellement des variables d'environnement et d'autres éléments de configuration du projet.

Pour initialiser le projet et créer le package.json, taper la commande dans le dossier du projet : npm init

Puis valider les options appropriées à votre projet.

## Express.js

Express est une surcouche à node qui facilite la syntaxe de la gestion des requêtes http. 

Pour installer express et ajouter dans package.json la dépendance à express : npm install express

## index.js

On peut déjà écrire notre premier serveur node express. Si vous n'avez rien changé dans les propositions du package.json, votre fichier de démarrage serveur est index.js

Avec notre premier code index.js, on a juste créé un serveur http qui écoute sur le port 3000 et une ressource racine ( / ) qui reçoit des requêtes http GET et renvoie "hello world!". Pour tester, il suffit de démarrer votre serveur avec la commande : node index.js

Puis dans votre navigateur : localhost:3000

vous devriez voir afficher "hello world !"
