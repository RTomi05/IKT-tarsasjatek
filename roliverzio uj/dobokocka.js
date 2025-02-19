
function dobas()
{
    const doboSzamok = [1,2,3,4,5,6];
    let randomSzam = Math.floor(Math.random() * doboSzamok.length);
    let dobottSzam = doboSzamok[randomSzam];
    console.log(dobottSzam);
}

dobas();