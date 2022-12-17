
let total_seconds = 3599;
let keyPressed = true;
var myInterval = null;

function startCountdown() {

    const minutes = Math.floor(total_seconds / 60);
    let seconds = total_seconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    total_seconds--;
}

function keyEvent() {
    
    if (keyPressed == true) {
        myInterval = setInterval(startCountdown, 1000);
        keyPressed = false;
    } else {
        clearInterval(myInterval);
        keyPressed = true;
    }
}