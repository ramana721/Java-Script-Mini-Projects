const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerId;

const divmod = (a, b) => [Math.floor(a/b), a%b];

function startTimer() {
	
	function timer(){
		// let curTime = timerEl.innerText;
		// let seconds = parseInt(curTime.slice(6,8));
		// let minutes = parseInt(curTime.slice(3,5));
		// let hours = parseInt(curTime.slice(0,2));

		// seconds += 1;
		// if (seconds == 60){
		// 	minutes++;
		// 	if (minutes === 60){
		// 		hours += 1;
		// 		minutes = 0;
		// 	}
		// 	seconds = 0;
		// }
		
		// ALternate approach 
		// instead of reading the text every time just storing the seconds as a seperate variable and use it every time to make the calcs
		elapsedTime++;
		let [hours, rem] = divmod(elapsedTime, 3600);
		let [minutes, seconds] = divmod(rem, 60);

		
		seconds = String(seconds).padStart(2, '0');
		minutes = String(minutes).padStart(2, '0');
		hours = String(hours).padStart(2, '0');
		timerEl.innerText = `${hours}:${minutes}:${seconds}`;
	}
	timerId = setInterval(() => timer(), 1000);
}

function stopTimer() {
	clearInterval(timerId);
	return ;
}

function resetTimer() {
	timerEl.innerText = "00:00:00";
	elapsedTime = 0;
	clearInterval(timerId);
	return ;
}

startButtonEl.addEventListener("click", () => startTimer());
stopButtonEl.addEventListener("click", () => stopTimer());
resetButtonEl.addEventListener("click", () => resetTimer());