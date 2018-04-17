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
	


	function testis() {

	/*var currentviikko = (new Date().getWeekNumber());  tätä käytetään oikeessa versiossa*/
	var currentviikko = 13; /*nyt vaan laitetaan viikko numeroon 13 testauksen vuoks*/
		for (var i = luukut.length; i > currentviikko;) /*<--vituttaa tällänen*/{
			luukut[i]
			console.log('123');
			console.log(luukut.length);
		}


	}
	

