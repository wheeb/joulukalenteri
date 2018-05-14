	var luukut = [
	{
		"title" : "Viikko 21",
		"description" : "Maailma kylässä -festivaalia vietetään Helsingin keskustassa vuosittain toukokuun lopussa. Viikonlopun aikana Kaisaniemen puistossa ja Rautatientorilla nautitaan kymmenistä konserteista, tanssista, teatterista, kirjallisuudesta, hyvästä ruoasta ja ajankohtaisista keskusteluista. Ilmaistapahtuma tarjoaa tekemistä ja koettavaa kaikenikäisille. Lisätietoa tapahtumasta saat täältä: https://www.maailmakylassa.fi/",
	},
	{
		"title" : "Viikko 22",
		"description" : "Tällä viikolla monia eri museo vaihtoehtoja, jotka ovat perjantaina ilmaisia. Linkkejä eri museoihin:  https://kiasma.fi/ / https://www.kansallismuseo.fi/fi/kansallismuseo/etusivu / https://www.valokuvataiteenmuseo.fi/fi",
	},
	{
		"title" : "Viikko 23",
		"description" : "Maailman suurin saunafestivaali, Finnish Sauna Festival perustuu saunoihin, suomalaiseen musiikkiin ja muotoiluun sekä kesäiseen ruokaan. http://saunafestival.fi/",
	},
	{
		"title" : "Viikko 24",
		"description" : "Suomen vanhin ja suosituin huvipuisto, joka sijaitsee Helsingin Alppilassa. Linnanmäellä on yli 40 huvipuistolaitetta, runsaasti erilaisia pelejä sekä ravintoloita ja kahviloita. https://www.linnanmaki.fi/fi/",
	},
		{
		"title" : "Viikko 25",
		"description" : "Juhannus hiljentää Helsingin kadut mutta keskikesän juhla tarjoaa runsaasti tapahtumia eri puolilla kaupunkia. https://www.hel.fi/uutiset/fi/kaupunginkanslia/helsingin-juhannus",
	},
		{
		"title" : "Viikko 26",
		"description" : "Koko kansan Helsinki Pride tuo kaikki sateenkaaren värit kaupunkiin juhannuksen jälkeisellä viikolla. http://helsinkipride.fi/fi/",
	},
		{
		"title" : "Viikko 27",
		"description" : "Craft Beer Helsinki on käsityöläisolutfestari, joka järjestetään kolmatta kertaa. http://www.craftbeerhelsinki.fi/",
	},
		{
		"title" : "Viikko 28",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 29",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 30",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 31",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 32",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 33",
		"description" : "7iyr",		
	}

	]

	/*functio määrittää luukunviikon*/
		var luukunviikko;
	function printtaa(argumentti){
		luukunviikko = argumentti;
		var viikonteksti = viikonkerronta();
		window.alert(viikonteksti);
	}

	/*tää hakee nykyisen viikon*/
		Date.prototype.getWeekNumber = function(){
		var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
		var dayNum = d.getUTCDay() || 7;
		d.setUTCDate(d.getUTCDate() + 4 - dayNum);
		var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
		var outputs = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
		return outputs; /*kuinka saada viikkonumero? 'new Date().getWeekNumber()' palauttaa nykyisen viikon*/
		}

		var currentweek = new Date().getWeekNumber();
		var i = currentweek - 21;

	/*luukun onclick kertoo nykyisen viikon ja looppi katsoo ollaanko kyseisellä viikolla*/
	function viikonkerronta() {
	if (currentweek > luukunviikko) {
		return "Viikko meni jo. Katso seuraava!";
	}

	else if (currentweek == luukunviikko) {
		return luukut[i].title + luukut[i].description + "yms muu kontentti";
	}

	else if (currentweek < luukunviikko) {
		return "Tämä luukku ei ole vielä auki palaa myöhemmin";
	}
}