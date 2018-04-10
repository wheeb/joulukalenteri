	function culli() {
	var da = new Date();
	var te = da.getDate();
	console.log(te);
	}
	function week() {
		Date.prototype.getWeekNumber = function(){
		var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
		var dayNum = d.getUTCDay() || 7;
		d.setUTCDate(d.getUTCDate() + 4 - dayNum);
		var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
		return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};