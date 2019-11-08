# But de l'API

Cette API renvoie une blague ainsi que son analyse sentimentale (Positif/Neutre/Négatif).
Elle se base sur deux autres API: une générant la blague, une autre analysant les sentiments d'une chaine de caractères.

On passe donc le résultat de la première dans la seconde. Puis, nous les restituons. 

Le serveur utilise la technologie NodeJS.


# Comment utiliser l'API

lien vers le projet : jokegouby.herokuapp.com/joke/

                      jokegouby.herokyapp.com/index

Heroku/joke renvoie une blague, sans prendre en compte sa catégorie.

Heroku/joke/*catégorie* renvoie une blague suivant les trois catégories possibles :
  - Dark
  - Programming
  - Miscellaneous

Les données peuvent être renvoyées ou bien en JSON ou bien en CSV.

Dans Heroku/index, vous trouverez l'exemple d'un cas client, où nous pouvons générer une ou plusieurs blague(s), obtenir le résultat de l'analyse sentimentale via un emoji, sauvegarder et télécharger le tout dans les deux formats disponibles.


# API utilisées

- blagues : jokeapi.p.rapidapi.com

- analyse sentimentale : https://text-sentiment.p.rapidapi.com/analyze

- ChatBot : https://rapidapi.com/Acobot/api/brainshop-ai
