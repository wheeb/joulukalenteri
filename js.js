	var luukut = [
	{
		"title" : "Viikko 21",
		"description" : "Maailma kylässä -festivaalia vietetään Helsingin keskustassa vuosittain toukokuun lopussa. Viikonlopun aikana Kaisaniemen puistossa ja Rautatientorilla nautitaan kymmenistä konserteista, tanssista, teatterista, kirjallisuudesta, hyvästä ruoasta ja ajankohtaisista keskusteluista. Ilmaistapahtuma tarjoaa tekemistä ja koettavaa kaikenikäisille. Lisätietoa tapahtumasta saat täältä: https://www.maailmakylassa.fi/",
	},
	{
		"title" : "Viikko 22",
		"description" : "7iyr",
	},
	{
		"title" : "Viikko 23",
		"description" : "7iyr",
	},
	{
		"title" : "Viikko 24",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 25",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 26",
		"description" : "7iyr",
	},
		{
		"title" : "Viikko 27",
		"description" : "7iyr",
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

	function printtaa(argumentti){
		var luukunviikko = argumentti;
		return luukunviikko;
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

	/*luukun onclick kertoo nykyisen viikon ja looppi katsoo ollaanko kyseisellä viikolla*/
	function viikonkerronta() {
	if (currentweek > luukunviikko) {
		document.getElementById("modal").innerHTML = "Viikko meni jo. Katso seuraava!"
	}

	else if (currentweekviikko == luukunviikko) {
		document.getElementById("modal").innerHTML = luukut[i].title + luukut[i].description + "yms muu kontentti";
	}

	else if (currentviikko < luukunviikko) {
		document.getElementById("modal").innerHTML = "Tämä luukku ei ole vielä auki palaa myöhemmin"
	}
}