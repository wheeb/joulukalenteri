	var luukut = [
	{
		"title" : "getFullYear1",
		"description" : "7iyr",
		"image" : "image.image"
	},
	{
		"title" : "getFullYear2",
		"description" : "7iyr",
		"image" : "image.image"
	},
	{
		"title" : "getFullYear3",
		"description" : "7iyr",
		"image" : "image.image"
	},
	{
		"title" : "getFullYear4",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear5",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear6",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear7",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear8",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear9",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear10",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear11",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear13",
		"description" : "7iyr",
		"image" : "image.image"
	},
		{
		"title" : "getFullYear23",
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
		for (var i = luukut.length; i >= currentviikko; i--) /*<--vituttaa tällänen*/{
			luukut[i]
		}

	}