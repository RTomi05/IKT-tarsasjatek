
let jatekosok = [
    {nev: "Játékos1", penz: 0}, 
    {nev: "Játékos2", penz: 0}, 
    {nev: "Játékos3", penz: 0}
];

// Aktuális játékos indexe (0, 1, 2)
let randomJatekosIndex = Math.floor(Math.random() * 3);

// Szerencsekártya
function szerencsekartya() {

    const szerencsepakli = ["Kapsz 2000-t.", "Kapsz 3000-t."];
    const szerencseErtekek = [2000, 3000];

    let szerencseErtek = Math.floor(Math.random() * szerencsepakli.length);
    let kapottSzerencse = szerencseErtekek[szerencseErtek];
    console.log(`${jatekosok[randomJatekosIndex].nev} kapta a kártyát: ${szerencsepakli[szerencseErtek]}`);


    jatekosok[randomJatekosIndex].penz += kapottSzerencse;

    kiirPenz();

    randomJatekosIndex = (randomJatekosIndex + 1) % jatekosok.length;
}szerencsekartya();

function kiirPenz() {
    console.log("Játékosok pénzei:");
    for (let i = 0; i < jatekosok.length; i++) {
        console.log(`${jatekosok[i].nev} pénze: ${jatekosok[i].penz}`);
    }
}

function konyvutalvany() {
    /* ellenőrzés
    let mezoke = document.getElementsByClassName("M24");    
    console.log(`Van ${mezoke.length} M24-es mező!`);
    */

}

// bábú mozgása
let JelenlegiPozicio = -1;
let babu;

document.addEventListener("DOMContentLoaded", () => {
    const mezo = document.querySelectorAll("[class^='M']");
    babu = document.getElementById("babu");
    
    if (!babu) {
        console.error("A bábú elem nem létezik!");
        return;
    }
    
    if (mezo.length === 0) {
        console.error("Nem találhatóak mezők a táblán!");
        return;
    }


    function dobokocka() {
        return Math.floor(Math.random() * 6) + 1; // Dobókocka értéke 1-6 között
        
    }

    function BabuMozgatas(lepesek) {
        JelenlegiPozicio += lepesek;
        if (JelenlegiPozicio >= mezo.length) {
            JelenlegiPozicio = mezo.length; // Ne lépje túl a mezőket

        }

        /*if (JelenlegiPozicio <= 1) {
            JelenlegiPozicio = -1;
        }*/

        const UjMezo = mezo[JelenlegiPozicio];
        if (UjMezo) {
            UjMezo.appendChild(babu);
        } /*else {
            console.error("Hibás mező index:", JelenlegiPozicio);
        }*/
        
    } 

    document.body.addEventListener("click", () => {
        let DobasEredmeny = dobokocka();   
        /*
        if (DobasEredmeny == 1) {
            JelenlegiPozicio -= 3;
            console.log("Ekkora a dobás eredmény",DobasEredmeny)
        } 
        */
        console.log(`Dobott szám: ${DobasEredmeny}`);
        BabuMozgatas(DobasEredmeny);
        console.log(`Új pozíció: ${JelenlegiPozicio +1}`);
        //console.log(`Új pozíció: ${JelenlegiPozicio + (DobasEredmeny !== 1 ? 1 : 0)}`);

        
        const rotations = {
            13: 'rotate(90deg)',
            19: 'rotate(0deg)',
            33: 'rotate(-90deg)'
        };
        
        let rotationValue = '';
        for (const position in rotations) {
            if (JelenlegiPozicio >= position) {
                rotationValue = rotations[position];
            }
        }
        
        document.querySelector('.kekbabu').style.transform = rotationValue;

    });
});


/* random pénz generálás a játékosoknak
let penzek = [
    ...Array(1).fill(20000),  // 1 db 20 000 Ft
    ...Array(1).fill(10000),  // 1 db 10 000 Ft
    ...Array(8).fill(5000),   // 8 db 5 000 Ft
    ...Array(3).fill(1000),   // 3 db 1 000 Ft
    ...Array(5).fill(500)     // 5 db 500 Ft
];

penzek = penzek.sort(() => Math.random() - 0.5);

for (let i = 0; i < penzek.length; i++) {
    let jatekosIndex = i % jatekosok.length;
    jatekosok[jatekosIndex].penz += penzek[i];
}
*/


