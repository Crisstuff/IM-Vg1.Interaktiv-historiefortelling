// Funksjon for å legge til en historie-seksjon til siden
function addStorySection(chapterFile, sectionId) {
    fetch(`sections/${chapterFile}.html`) // Hent riktig kapiteldokument
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser(); //brukes til å parse (lese å forstå) data fra en html fil
            const doc = parser.parseFromString(html, 'text/html');
            const section = doc.getElementById(sectionId);
            section.style.display = "block"; // Sørger for at seksjonen er synlig
            const storyContainer = document.getElementById('story-container'); //finner kontainern vi vil putte innholdet i
            storyContainer.innerHTML += section.outerHTML; // Legger til den valgte seksjonen til kontaineren
            setupButtons(); // Setter opp knappene for ny lastet seksjon
            previousSections.push(sectionId);
            scrollToSection(sectionId); // Scroll to the newly added section
        }).catch(error => console.error('Error loading the section:', error));
}



