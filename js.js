	var luukut = [
	{
		"title" : "Viikko 21",
		"description" : "7iyr",
		"image" : "image.image"
	},
	{
		"title" : "Viikko 22",
		"description" : "7iyr",
		"image" : "image.image"
	},
	{
		"title" : "Viikko 23",
		"description" : "7iyr",
		"image" : "image.image"
	},
	{
		"title" : "Viikko 24",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 25",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 26",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 27",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 28",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 29",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 30",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 31",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 32",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "Viikko 33",
		"description" : "7iyr",
		"image" : "image.image"
	}

	]

/*tähän tulee Array(eli kuvat)*/



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