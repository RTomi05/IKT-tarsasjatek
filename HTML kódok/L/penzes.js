let jatekosok = [
    {nev: "játékos1", penz: 0}, 
    {nev: "játékos2", penz: 0}, 
    {nev: "játékos3", penz: 0}
];

//aktuális játékos indexe (0, 1, 2)
let aktualisJatekosIndex = 0;

// szerencsekártya
function szerencsekartya() {

    const szerencsepakli = ["Kapsz 2000-t.", "Kapsz 3000-t."];
    const szerencseErtekek = [2000, 3000];

    let szerencseErtek = Math.floor(Math.random() * szerencsepakli.length);
    let kapottSzerencse = szerencseErtekek[szerencseErtek];
    console.log("A kapott kártya: " + szerencsepakli[szerencseErtek]);

    jatekosok[aktualisJatekosIndex].penz += kapottSzerencse;

    kiirPenz();

    aktualisJatekosIndex = (aktualisJatekosIndex + 1) % jatekosok.length;
}

function kiirPenz() {
    console.log("Játékosok pénzei:");
    for (let i = 0; i < jatekosok.length; i++) {
        console.log(`${jatekosok[i].nev} pénze: ${jatekosok[i].penz}`);
    }
}

// Könyvutalvány
document.addEventListener('DOMContentLoaded', function() {
    konyvutalvany();
});

function konyvutalvany() {
    let mezo = document.getElementsByClassName("M24");
    console.log(`Van ${mezo.length} M24-es mező!`);
}

// Kezdő pénz kiírása
console.log("Kezdeti pénzek:");

// A bábú elem
const babu = document.getElementById("babu");

// A "Start" pozíció megtalálása
const start = document.getElementsByClassName("start");

// Kezdeti bábú helyzet a "Start" osztályban
let babuIsClickable = true;  // Alapértelmezetten nem kattintható

// Az M classokra kattintás esemény figyelése
const mElements = document.querySelectorAll('.M');

// A bábú mozgása az M classra
function moveBabuTo(positionElement) {
    const position = positionElement.getBoundingClientRect();
    babu.style.left = position.left + 'px';
    babu.style.top = position.top + 'px';
}

// Ha rákattintasz a bábúra, akkor kezd el mozogni
babu.addEventListener('click', () => {
    babuIsClickable = true;  // Innentől kezdve kattintható lesz
});

// Kattintás az M class elemekre
mElements.forEach(element => {
    element.addEventListener('click', (event) => {
        if (babuIsClickable) {
            moveBabuTo(element);  // A bábú oda kerül, ahol az M classra kattintottak
        }
    });
});

// Kezdő pozíció beállítása a Start-ra
function setBabuStartPosition() {
    const startPosition = start.getBoundingClientRect();
    babu.style.left = startPosition.left + 'px';
    babu.style.top = startPosition.top + 'px';
}

// Az oldal betöltésekor állítsuk be a bábú kezdőpozícióját
setBabuStartPosition();

function mezokirak()
{
    let tabla = document.getElementsById("tabla");

    for(let i = 1;i < 40;i++)
    {
        tabla.innerHTML += `
            <div class="M${i}" >
                <div class="szam">${i}</div><div class="mezoKep kep"></div><div class="szoveg"></div>
            </div>`
    }
}