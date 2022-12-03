const spielfeld_class = "spielfeld";
const spielstand_class ="spielstand"
const feld_class = "feld"
const spieler_class = "spieler"
const gegner_class= "gegner"

const spielfeld = document.querySelector("." + spielfeld_class)
const spielstand = document.querySelector("." + spielstand_class)
const felder = document.querySelectorAll("." + feld_class)
const gegner = document.querySelector("." + gegner_class)
const spieler = document.querySelector("." + spieler_class)

let aktuelleKlasse;
spielStarten();

function klickVerarbeitung(ereignis) {
    const feld = ereignis.target;
    if (spielsteinSetzen(feld)=== true) {
        zugBeenden()
    }
}

function spielsteinSetzen(feld) {
    if (
        feld.classList.contains(spieler_class) ||
        feld.classList.contains(gegner_class)
    ) {
        return false;
    }
    feld.classList.add(aktuelleKlasse);
    feld.disabled = true;
    return true;
}

function spielStarten() {
    for(const feld of felder){
        feld.addEventListener("click", klickVerarbeitung)
    }
    zugBeenden();
}

function zugBeenden() {
    if(aktuelleKlasse === spieler_class){
        aktuelleKlasse = gegner_class;
    } else if (aktuelleKlasse === gegner_class){
        aktuelleKlasse = spieler_class;
    } else {
       aktuelleKlasse = Math.random() <0.5 ? spieler_class : gegner_class;
    }

    spielstandAktualisieren()
}

function spielstandAktualisieren() {
    if (aktuelleKlasse === spieler_class) {
        spielstand.innerText = "Du bist am Zug"
    } else { spielstand.innerText = "Der Gegner ist am Zug"}
}