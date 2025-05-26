function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
       let journal = data.journal
       console.log(journal);
       
       //HEADER (Nom du journal)
       let header = document.querySelector("header")
       console.log(header);
       let h2 = document.createElement("h2");
       h2.textContent = journal.nomJournal;
       header.appendChild(h2);

       //Phrase d'accroche
       let h1 = document.createElement("h1");
       h1.textContent = journal.phraseAccroche;
       header.appendChild(h1)
       
       //Texte

       let p = document.createElement("p");
       p.textContent = journal.texteAppelAction;
       header.appendChild(p);

       // Themes
      let themesContainer = document.createElement('div')
      themesContainer.className = "themes"
      let themes = journal.themes;
       

      themes.forEach(theme => {
        
        let carteTheme = document.createElement('div');
        let themeName = document.createElement("h3")
        themeName.textContent = theme.nom   
        carteTheme.appendChild(themeName)

       let themeDescription = document.createElement("p");
       themeDescription.textContent = theme.description
       carteTheme.appendChild(themeDescription)

       themesContainer.appendChild(carteTheme)
      });

       //////
       header.appendChild(themesContainer)


       //MAIN
       //ARTICLE LE PLUS RECENT


       
       let articlePrincipal = journal.articlePrincipal;
       let artilesSection = document.getElementById("articles")
       
       let titre = document.createElement("h2");
       titre.textContent = articlePrincipal.titre;
       
       artilesSection.appendChild(titre)

       let image = document.createElement("img");
       image.src = articlePrincipal.image;
       image.alt = "mainImage"
       artilesSection.appendChild(image)

       let date = document.createElement("p")
       date.textContent = articlePrincipal.date
       artilesSection.appendChild(date)

       let theme = document.createElement("p")
       theme.textContent = articlePrincipal.theme
       artilesSection.appendChild(theme)

       let description = document.createElement("p")
       description.textContent = articlePrincipal.description
       artilesSection.appendChild(description)

       let articles = data.journal.articles
       
       articles.forEach(article => {
       let artilesSection = document.getElementById("articles")
       
       let titre = document.createElement("h2");
       titre.textContent = article.titre;
       
       artilesSection.appendChild(titre)

       let image = document.createElement("img");
       image.src = article.image;
       image.alt = "mainImage"
       artilesSection.appendChild(image)

       let date = document.createElement("p")
       date.textContent = article.date
       artilesSection.appendChild(date)

       let theme = document.createElement("p")
       theme.textContent = article.theme
       artilesSection.appendChild(theme)

       let description = document.createElement("p")
       description.textContent = article.description
       artilesSection.appendChild(description)
        
       });

       //section 2

       let auteurs = data.journal.auteurs

       auteurs.forEach(auteur => {
        
        let auteursSection = document.getElementById("auteurs")
       let section = document.createElement("section")

       let auteurs = journal.auteur
       
       let prenom = document.createElement("h3")
       prenom.textContent = auteur.prenom
       section.appendChild(prenom)
       
       let typeExperience = document.createElement("p")
       typeExperience.textContent = auteur.typeExperience
       section.appendChild(typeExperience)
       
       let presentation = document.createElement("p")
       presentation.textContent = auteur.presentation
       section.appendChild(presentation)
       console.log(section);
       auteursSection.appendChild(section) 

        
       });
       
       
       
       let main = document.getElementById("main")

       let mainImage = document.createElement(`img`)
       mainImage.src = "images/image.png"
       mainImage.alt = "image dino"
       main.appendChild(mainImage)
       
       
       
      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici