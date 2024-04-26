//første fuction er å lukke siden 
function closeWindow() {
    window.close(); // This will attempt to close the current window/tab
}
// Get the modal
var modal = document.getElementById("myModal");

// gi verdi til ting for en indikator 

//ncsdjkns
var dataMaskin = document.getElementById("taDatamaskin")
var deathToHerjus =document.getElementById("")


//scroll funsjon 
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


function tilKjøkken(){
    
}

function tilbakeTilsoveRoom(){
    if(dataMaskin = true) {
        dataMaskin.scrollToSection(deathToHerjus);
    }else {
        dataMaskin.scrollToSection(tilbakeTilsoverRom-2);
    }
}