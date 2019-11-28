class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = 0;
	}
	startClick() {
		this.intervalId = setInterval(() => {
			this.currentTime++;
		}, 1000);
	}
	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return this.currentTime % 60;
	}
	twoDigitsNumber(digit) {
		return digit < 10 ? `0${digit}` : `${digit}`;
	}
	stopClick() {
		clearInterval(this.intervalId);
	}
	resetClick() {
		this.currentTime = 0;
	}
	splitClick() {
		return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
	}
}
