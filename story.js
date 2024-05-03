// Funksjon for å legge til en historie-seksjon til siden
function addStorySection(chapterFile, sectionId) {
  return fetch(`sections/${chapterFile}.html`) // Hent riktig kapiteldokument
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser(); //brukes til å parse (lese å forstå) data fra en html fil
      const doc = parser.parseFromString(html, "text/html");
      const section = doc.getElementById(sectionId);
      if (section) {
        // Check if section exists
        section.style.display = "block"; // Sørger for at seksjonen er synlig
        const storyContainer = document.getElementById("story-container"); //finner kontainern vi vil putte innholdet i

        // Clear previous sections
        if (document.getElementById(sectionId)) {
          const previousSection = document.getElementById(sectionId);

          previousSection.remove();
          console.log("Clearing previous section");
        }

        storyContainer.appendChild(section); // Append the new section to the story container

        setupButtons(); // Setter opp knappene for ny lastet seksjon

        // Scroll to the newly added buttons
        const buttons = document.querySelectorAll(".story-button");
        buttons[buttons.length - 1].scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Section not found:", sectionId);
      }
    })
    .catch((error) => console.error("Error loading the section:", error));
}


function setupButtons() {
  const buttons = document.querySelectorAll(".story-button");

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  function handleButtonClick(event) {
    const sectionId = event.target.dataset.section;
    const chapterFile = event.target.dataset.chapter;

    addStorySection(chapterFile, sectionId);
  }
}



window.onload = addStorySection("start-1", "start");

function reloadPage() {
  location.reload();
}


function scrollTo50Section() {// Generer en tilfeldig sjanse (1-2)
  const randomSjanse = Math.floor(Math.random() * 100) + 1;
  if (randomSjanse <= 50) {
      document.getElementById('p2-50prøvoggift-1');
  } else {
      document.getElementById('p2-slutt50prøvoggift-2');

  }
}
