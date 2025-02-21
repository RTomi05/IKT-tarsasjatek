
//aktuális játékos meghatározása

let aktualisJatekos = ""; //játékos1 vagy játékos 2 vagy játékos 3

//játékosok pénze kezdésnél

function startPenz()
{
	let jatekos1Penz = 0;
	let jatekos2Penz = 0;
	let jatekos3Penz = 0;
}

//játékosok pénze tranzakciónál

function szerencsekartya()
{
	let aktualisKartya = "";

	const szerencsepakli = ["Kapsz 2000-t.", "Kapsz 3000-t."];
	const szerencseErtekek = [1,2];
    let szerencseErtek = Math.floor(Math.random() * szerencsepakli.length);
    let kapottSzerencse = szerencseErtekek[szerencseErtek];
    console.log("A kapott kártya indexe: " + kapottSzerencse);

	console.log(szerencsepakli[kapottSzerencse - 1]);

	if (actualisJatekos = "játékos1")
	{
		jatekos1Penz= jatekos1Penz + aktualisKartya;
	}
	else if (actualisJatekos = "játékos2")
	{
		jatekos2Penz= jatekos2Penz + aktualisKartya;
	}

	else if (actualisJatekos = "játékos3")
	{
		jatekos3Penz= jatekos3Penz + aktualisKartya;
	}
}

//startPenz();

proba = proba + aktualisKartya
console.log(proba);