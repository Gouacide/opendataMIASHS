manga :
		- id
		- gid ?
		- type (ex: manga)
		- name (ex: Naruto: The Seventh Hokage and the Scarlet Spring)
		- precision ?
		- generated on 
		- related-prev 
		- related-next
		
		Info :	
			- Picture 
			- Main title : Naruto: The Seventh Hokage and the Scarlet Spring
			- Alternative title : Naruto Extra: Il settimo hokage e il marzo rosso
			- Genre
			- Objectionable content ?
			- Plot summary
			- Number of takoubon
			- Vintage : dates de diffusion ?
			
		Rating :
			- Nb votes
			- weighted score
			- Bayesian score
		
		Review :
			- lien vers la page de review
		
		Release : 
			- date 
			
		News :
			- datetime
			- News dans la balise
		
		Staff :
			- task
			- person (id, name)
