// Funksjon for å legge til en historie-seksjon til siden
function addStorySection(chapterFile, sectionId) {
    fetch(`sections/${chapterFile}.html`) // Hent riktig kapiteldokument
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser(); //brukes til å parse (lese å forstå) data fra en html fil
            const doc = parser.parseFromString(html, 'text/html');
            const section = doc.getElementById(sectionId);
            if (section) { // Check if section exists
                section.style.display = "block"; // Sørger for at seksjonen er synlig
                const storyContainer = document.getElementById('story-container'); //finner kontainern vi vil putte innholdet i
                storyContainer.innerHTML = ""; // Clear the story container
                storyContainer.appendChild(section); // Append the new section to the story container
                setupButtons(); // Setter opp knappene for ny lastet seksjon
                previousSections.push(sectionId);
                scrollToSection(sectionId); // Scroll to the newly added section
            } else {
                console.error('Section not found:', sectionId);
            }
        }).catch(error => console.error('Error loading the section:', error));
}

function setupButtons() {
  const buttons = document.querySelectorAll(".story-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const sectionId = event.target.dataset.section;
      const chapterFile = event.target.dataset.chapter;
      addStorySection(chapterFile, sectionId);
      addStorySection("politisoryline", sectionId);
    });
  });
}


window.onload = addStorySection("start-1", "start");

