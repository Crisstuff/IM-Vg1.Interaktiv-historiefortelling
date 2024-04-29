let previousSections = [];

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        // Lagre ID-en til den forrige seksjonen
        previousSections.push(sectionId);
        // Vis mål-avsnittet
        section.style.display = 'flex';
        // Rull til mål-avsnittet
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
    }
}

// ingenting kommer til å skje hvis du fjerner dette 
// notat til DEGSELV kjekk hva denne gjør 
// Legg til en lytter for å vise tidligere besøkte seksjoner når du skroller oppover
window.addEventListener('scroll', () => {
    if (previousSections.length > 0) {
        previousSections.forEach(sectionId => {
            let section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'flex';
            }
        });
    }
});


//tester scrolling via html dokumenter
function scrollToStoryLine(sectionId) {
    // Endre URL-en til politistoryline.html
    //const list = document.getElementsByTagName("p")
    //let section = window.getElementsByName(storyLineHref);
    window.location.href = "politistoryline.html";
    let section = document.getElementById(sectionId);
    if (section) {
        // Lagre ID-en til den forrige seksjonen
        previousSections.push( sectionId);
        // Vis mål-avsnittet
        section.style.display = 'flex';
        // Rull til mål-avsnittet
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


function myFunction() {
    // Endre URL-en til politistoryline.html
    window.location.href = "politistoryline.html";
}