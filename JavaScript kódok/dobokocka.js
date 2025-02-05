function dobas()
{
    let doboSzamok = [1,2,3,4,5,6];
    let dobokocka = Math.floor(Math.random() * doboSzamok.length);
    dobokocka = doboSzamok[dobokocka];
    console.log(dobokocka, doboSzamok[dobokocka]);
}

dobas();