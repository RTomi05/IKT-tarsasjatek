
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
    /* Egyenlőre ez jó
    const mezo = document.querySelectorAll("[class^='M']");
    */
    const mezo = [...document.querySelectorAll("[class^='M']")]; // NodeList átalakítása tömbbé

    // Új elem létrehozása és hozzáadása a listához
    const startElem = document.querySelector(".start"); 
    if (startElem) mezo.splice(40, 0, startElem); // 40. helyre beszúrjuk
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

    const szovegek = [
        "1. Szemeteltél. Fizess 100 Ft-ot.",
        "2. Húzz egy szerencsekártyát!",
        "3. Takarékoskodj! Betéteid után 5% kamatot kapsz.",
        "4. Vásárolhatsz! Hűtőgép: 9.000 Ft.; Mosógép: 8.000 Ft.; Televízió: 12.000 Ft.; Rádió: 3.000 Ft.; Porszívó: 2.000 Ft.",
        "5. Csöpög a csap, és baromira nem akarod megszerelni. Egy dobásból kimaradsz!",
        "6. A Dohányzás káros. Hogy jobban eszedbe vésd, fizess 1.000 Ft-ot.",
        "7. Vásárolhatsz!  <br> Árak: <ul><li>Hűtőgép: 9.000 Ft.;</li><li>Mosógép: 8.000 Ft.;</li><li>Televízió: 12.000 Ft.;</li><li>Rádió: 3.000 Ft.;</li><li>Porszívó: 2.000 Ft.</li></ul>",
        "8. Élet- és lakásbiztosítást köthetsz. Életbiztosítás: 1.000 Ft. Lakásbiztosítás: 900 Ft.",
        "9. Húzz egy szerencsekártyát!",
        "10. MÁV-val utazol. Lépj a 15-ös mezőre!",
        "11. Dobhatsz még egyszer!",
        "12. Postázod a legújabb Lady Gaga lemezt. Lépj előre két mezőt!",
        "13. Lakásodat berendezheted. <br> Árak: <ul><li>Hűtőgép: 9.000 Ft.;</li><li>Mosógép: 8.000 Ft.;</li><li>Televízió: 12.000 Ft.;</li><li>Rádió: 3.000 Ft.;</li><li>Porszívó: 2.000 Ft.</li></ul>",
        "14. Szövetkezeti lakásépítés. Fizess be 30.000 Ft-ot, majd a maradék 40.000 Ft-ot körönként törleszd minimum 2.000 Ft-tal!",
        "15. Húzz egy szerencsekártyát!",
        "16. Ha kötöttél életbiztosítást, vegyél fel 3.000 Ft-ot!",
        "17. Kölcsönözhetsz! Rádió: 1.200 Ft. Mosógép: 3.000 Ft.Televízió: 4.000 Ft.",
        "18. Vásárolj mozi (300 Ft) és színházjegyet (450 Ft)!",
        "19. Minden reggel tornázol. Jutalmul lépj előre három mezőt.",
        "20. Sétarepülésre mentél. Lépj a 22-es mezőre!",
        "21. Rendszeresen tisztálkodsz, jutalmul még egyszer dobhatsz!",
        "22. Húzz egy szerencsekártyát!",
        "23. Segítettél egy idős embernek. Jutalmul még egyszer dobhatsz!",
        "24. Könyvutalványt vásárolhatsz. Ára: 500 Ft.",
        "25. Vidámparkba mentél. Fizess 5.000 Ft.ot!",
        "26. Társasház lakásépítés. Fizess be 40.000 Ft-ot, majd a maradék 30.000 Ft-ot körönként törleszd minimum 2.000 Ft-tal!",
        
        ]

    function showthePrices()
    {
        document.getElementById("szovegHelye").innerHTML = szovegek[4]+="Hűtőgép: 9.000 Ft.; Mosógép: 8.000 Ft.; Televízió: 12.000 Ft.; Rádió: 3.000 Ft.; Porszívó: 2.000 Ft.";

    }

    function BabuMozgatas(lepesek) {
        JelenlegiPozicio += lepesek;
        JelenlegiPozicio %= mezo.length; // Ha túllépi a 40-et, akkor visszamegy az elejére
    
        const UjMezo = mezo[JelenlegiPozicio];
        if (UjMezo) {
            UjMezo.prepend(babu);
        } else {
            console.error("Hibás mező index:", JelenlegiPozicio);
        }

        document.getElementById("szovegHelye").innerHTML = szovegek[JelenlegiPozicio]
    }
    

    document.getElementById("katt").addEventListener("click", () => {
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
        
        //document.querySelector('.kekbabu').style.transform = rotationValue;
        document.getElementById('babu').style.transform = rotationValue;

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


