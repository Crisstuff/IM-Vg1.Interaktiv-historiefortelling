//første fuction er å lukke siden 
function closeWindow() {
    window.close(); // This will attempt to close the current window/tab
}
// Get the modal

// gi verdi til ting for en indikator 





function scrollToSection(sectionId) {
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        if (section.id !== sectionId) {
            section.style.display = 'none';
        }
    });

    let section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}







