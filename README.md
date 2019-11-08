# But de l'API

Cette API renvoie une blague ainsi que son analyse sentimentale (Positif/Neutre/Négatif).
Elle se base sur deux autres API: une générant la blague, une autre analysant les sentiments d'une chaine de caractères.

On passe donc le résultat de la première dans la seconde. Puis, nous les restituons. 

Le serveur utilise la technologie NodeJS.


# Comment utiliser l'API

jokegouby.herokuapp.com/joke/

Heroku/joke renvoie une blague, sans prendre en compte sa catégorie.
