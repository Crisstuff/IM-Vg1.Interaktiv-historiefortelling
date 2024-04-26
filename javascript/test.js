let previousSections = [];

        function scrollToSection(sectionId) {
            let section = document.getElementById(sectionId);
            if (section) {
                // Lagre ID-en til den forrige seksjonen
                previousSections.push(sectionId);

                // Vis mål-avsnittet
                section.style.display = 'flex';

                // Rull til mål-avsnittet
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

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