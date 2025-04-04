
const szovegek = [
    "Start <br> Belépésnél: 6000 Ft <br> Áthaladásnál: 4000 Ft",
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
    "27. Lépj előre egy mezőt!",
    "28. Közlekedési versenyen első lettél. Dobhatsz még egyszer!",
    "29. Bútor- és sportbolt <br> Termékek:<ul> <li>Szobabútor: 25.000 Ft.</li><li>Konyhabútor: 20.000 Ft.</li><li>Pingpong asztal: 4.000 Ft.</li><li>Kerékpár: 5.000 Ft.</li> </ul>",
    "30. Nyári táborban pihensz. Egy körből kimaradsz!",
    "31. Húzz egy szerencsekártyát!",
    "32. Jó helyezést értél el egy versenyen. Kapsz 1.000 Ft-ot!",
    "33. Figyelmesen körülnéztél. Lépj a 2-es mezőre!",
    "34. Vásárolhatsz! <br> <ul><li>Hűtőgép: 9.000 Ft.</li><li>Mosógép: 8.000 Ft.</li><li>Televízió: 12.000 Ft.</li><li>Rádió: 3.000 Ft.</li><li>Porszívó: 2.000 Ft.</li></ul>",
    "35. Húzz egy szerencsekártyát!",
    "36. Múzeumi látogatást tettél. Fizess 500 Ft-ot.",
    "37. Kitöltöttél egy keresztrejtvényt. Lépj előre két mezőt!",
    "38. Élelmiszert vásároltál. Fizess 650 Ft-ot.",
    "39. Kirándulást tettél a családoddal. Jutalmul dobhatsz még egyszer!"
    ];

const szerencsekartyak = [
    "Ha már van lakásod, fizess gáz- és villanyszámlát: 500 Ft!",
    "Lépj a 4. mezőre!",
    "Rejtvénypályázaton utazást nyertél, lépj a 11. mezőre!",
    "Kihajoltál a mozgó vonat ablakán. Egyszer kimaradsz a dobásból!",
    "Édesanyádnak segítettél kistestvéred gondozásában. Jutalmul lépj előre két mezőt!",
    "Lépj a 13. mezőre!",
    "Lépj a START mezőre és vegyél fel 6.000 Ft-ot!",
    "Nyereményjátékon szobabútort nyertél! Ha van már szobabútorod, megillet 25.000 Ft!",
    "Nem zártad el a csapot, így a víz feleslegesen folyt. Egyszer kimaradsz a dobásból!",
    "Kirándulásra indultál. Lépj előre két mezőt!",
    "Lépj a 19. mezőre!",
    "Lakásbiztosítást köthetsz: 900 Ft!",
    "Borítékos sorsoláson 20.000 Ft-ot nyertél!",
    "Kívánságkosárban rádiót nyertél! Ha van már rádiód, megillet 3.000 Ft!",
    "Baleset ért. Ha van életbiztosításod, kapsz 3.000 Ft-ot!",
    "Árleszállításon vásároltál, megspóroltál 1.500 Ft-ot!",
    "A Hervis szervezésében Pingpong asztalt nyertél! Ha van már Pingpong asztalod, megillet 4.000 Ft!",
    "A Bosch nyereményjátékán mosógépet nyertél! Ha van már mosógéped, megillet 8.000 Ft!",
    "Ha van betétkönyved, kapsz 2.000 Ft-ot!",
    "Nyertél a lottón. Kapsz 10.000 Ft-ot!",
    "Betéteid kamatozása miatt vedd magadhoz a betéteid 20%-át!",
    "Étteremben ebédelsz. Fizess 1000 Ft-ot!",
    "Az Intersport kerékpárt ajándékoz neked! Ha van már kerékpárod, megillet 5.000 Ft!",
    "Leugrottál a mozgó járműről. Háromszor kimaradsz a dobásból!",
    "A Libritől könyvutalványt nyertél. Lépj a 24-es mezőre, és vedd át!",
    "A Jysk nyereményjátékán konyhabútort nyertél! Ha van már konyhabútorod, megillet 20.000 Ft!",
    "Ajándékot vásárolsz kistestvérednek. Fizess 1.300 Ft-ot!",
    "Elmentél futni. Lépj előre két mezőt!",
    "Társasházat vásárolhatsz. Lépj a 26-os mezőre!",
    "A Samsung sorsolásán televíziót nyertél! Ha van már TV-d, megillet 12.000 Ft!",
    "Ha van lakásod, vásárolhatsz berendezéseket. Lépj a 29-es mezőre!",
    "Kibicsaklott a bokád, mert túl jó az út. Egyszer kimaradsz a dobásból!",
    "A Blikk nyereményjátékán 5.000 Ft-ot nyertél!",
    "Segítettél egy öreg néninek kertészkedni. Kapsz 800 Ft-ot!",
    "Lépj a 18-as mezőre!",
    "Lépj a 39-es mezőre!",
    "Elhagytad a lakáskulcsod. Lépj vissza két mezőt!",
    "Az Electrolux nyereményjátékán hűtőszekrényt nyertél! Ha van már hűtőd, megillet 9.000 Ft!",
    "Lépj a 33-as mezőre!"
    ];

let aktualis = 0;

class Jatekos{
    constructor(nev,kep,id)
    {
        this.nev = nev;
        this.kep = kep;
        this.penz = 6000;
        this.pozicio = 0;
        this.id = id;
    }
    leptet(lepesSzam)
    {
        this.pozicio += lepesSzam;
        if(this.pozicio >= 40)
        {
            this.pozicio -= 40;
            this.penz += 4000;
        }
        if(this.pozicio == 0)
        {
            this.penz += 2000;
        }

        document.getElementById("babu"+this.id).remove();

        document.getElementById("szovegHelye").innerHTML = szovegek[this.pozicio];
        let mezoSzama = document.getElementById("M"+this.pozicio);

        mezoSzama.innerHTML += "<img src='"+this.kep+"' alt='bábu' id='babu"+this.id+"' class='babu'>";

        

    }
    ugras(mezoSzam)
    {
        if(mezoSzam < this.pozicio)
        {
            this.leptet(mezoSzam - this.pozicio);         
        }
        else
        {
            this.leptet(40-this.pozicio+mezoSzam);
        }

        document.getElementById("babu"+this.id).remove();

        document.getElementById("szovegHelye").innerHTML = szovegek[this.pozicio];
        let mezoSzama = document.getElementById("M"+this.pozicio);

        mezoSzama.innerHTML += "<img src='"+this.kep+"' alt='bábu' id='babu"+this.id+"' class='babu'>";
    }
}


let jatekosok = [new Jatekos("Játékos1","./Kepek/kekbabu.png",1), 
    new Jatekos("Játékos2","./Kepek/sargababu.png",2), new Jatekos("Játékos3","./Kepek/pirosbabu.png",3)
];

function kockadobas()
{
    return Math.floor(Math.random()*6)+1;
}

//jatekosok[0].leptet(kockadobas());

document.getElementById("babu1").src = jatekosok[0].kep;
document.getElementById("babu2").src = jatekosok[1].kep;
document.getElementById("babu3").src = jatekosok[2].kep;

//"d" betűre dobás (majd feltétel kell még az elejére, hogy ne okozzon ütközést, ha folyamatban van egy működés / függvény!)

document.addEventListener("keyup", function(event)
    {
    if (event.key === "d")
        {
            event.preventDefault();
            jatekosLep();
        }
    }
);

function jatekosLep()
{
    
    console.log(document.getElementById("babu1"))
    console.log(jatekosok[aktualis].nev)

    jatekosok[aktualis].leptet(kockadobas());

    console.log(jatekosok[aktualis].pozicio);

<<<<<<< HEAD
    console.log(aktualis);
    document.getElementById("aktualisJatekosAdatok").innerHTML = "Aktuális játékos: "+jatekosok[aktualis].nev
    +"<br>"+"Jelenlegi pozíció: "+jatekosok[aktualis].pozicio
    +"<br>"+"Jelenlegi pénz: "+jatekosok[aktualis].penz
    +" Ft"//"<br>"+"Következik: "+jatekosok[(aktualis = 3)? aktualis=1 : aktualis+1].nev;
=======
    if(jatekosok[aktualis].pozicio == 1)
    {
        jatekosok[aktualis].penz -= 100; 
    }
    if(jatekosok[aktualis].pozicio == 12)
    {
        jatekosok[aktualis].ugras(14);
    }
>>>>>>> 5c8e4bc2a9bf9ee4e8e54d4c1e2802d0a467ed2b



    aktualis++;
    if(aktualis == 3)
    {
        aktualis = 0;
    }

    console.log(jatekosok[aktualis].penz);

}


/*

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
 ellenőrzés
    let mezoke = document.getElementsByClassName("M24");    
    console.log(`Van ${mezoke.length} M24-es mező!`);


}

// bábú mozgása
let JelenlegiPozicio = -1;
let babu;

document.addEventListener("DOMContentLoaded", () => {
 Egyenlőre ez jó
    const mezo = document.querySelectorAll("[class^='M']");

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


    function BabuMozgatas(lepesek) {
        JelenlegiPozicio += lepesek;
        JelenlegiPozicio %= mezo.length; // Ha túllépi a 40-et, akkor visszamegy az elejére
    
        const UjMezo = mezo[JelenlegiPozicio];
        if (UjMezo) {
            UjMezo.prepend(babu);
        } else {
            console.error("Hibás mező index:", JelenlegiPozicio);
        }

        document.getElementById("szovegHelye").innerHTML = szovegek[JelenlegiPozicio];
    }
    

    document.getElementById("katt").addEventListener("click", () => {
        let DobasEredmeny = dobokocka();   
        /*
        if (DobasEredmeny == 1) {
            JelenlegiPozicio -= 3;
            console.log("Ekkora a dobás eredmény",DobasEredmeny)
        } 
        */
       /*
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


