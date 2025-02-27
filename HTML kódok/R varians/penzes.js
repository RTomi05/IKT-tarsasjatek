let jatekosok = [
    {nev: "játékos1", penz: 0}, 
    {nev: "játékos2", penz: 0}, 
    {nev: "játékos3", penz: 0}
];

// Aktuális játékos indexe (0, 1, 2)
let randomJatekosIndex = Math.floor(Math.random() * 3);

// Szerencsekártya
function szerencsekartya() {

    const szerencsepakli = ["Kapsz 2000-t.", "Kapsz 3000-t."];
    const szerencseErtekek = [2000, 3000];

    let szerencseErtek = Math.floor(Math.random() * szerencsepakli.length);
    let kapottSzerencse = szerencseErtekek[szerencseErtek];
    console.log("A kapott kártya: " + szerencsepakli[szerencseErtek]);

    jatekosok[randomJatekosIndex].penz += kapottSzerencse;

    kiirPenz();

    randomJatekosIndex = (randomJatekosIndex + 1) % jatekosok.length;
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
    let mezo = document.getElementsByClassName("M24 kismezoFJ");
    console.log(`Van ${mezo.length} M24-es mező!`);
}

// Kezdő pénz kiírása
console.log("Kezdeti pénzek:");

// bábú mozgása



