const timeClock = document.getElementById("title");
const timeDays = document.getElementById("days");
const timeHours = document.getElementById("hours");
const timeMinutes = document.getElementById("minutes");
const timeSeconds = document.getElementById("seconds");

const countdown = setInterval(function () {
	const now = new Date();
	const tomorrow = new Date("23-08-25 9:30");

	const msNow = now.getTime();

	const msTomorrow = tomorrow.getTime();

	const sToTomorrow = Math.floor((msTomorrow - msNow) / 1000);

	const seconds = sToTomorrow % 60;
	const minutes = Math.floor((sToTomorrow / 60) % 60);
	const hours = Math.floor((sToTomorrow / 60 / 60) % 24);
	const days = Math.floor(sToTomorrow / 60 / 60 / 24);

	timeSeconds.innerText = seconds < 10 ? "0" + seconds : seconds;
	timeMinutes.innerText = minutes < 10 ? "0" + minutes : minutes;
	timeHours.innerText = hours < 10 ? "0" + hours : hours;
	timeDays.innerText = days < 10 ? "0" + days : days;
});
