var mydate = new Date();
mydate.setFullYear(2024);
// nechinchi oy bo'lsa 1 ga kichik son kiritish kerak
// bizni misolda sentyabr 9-oy, 8 kiritdik
mydate.setMonth(10);
mydate.setDate(14);
mydate.setHours(16);
mydate.setMinutes(0);
mydate.setSeconds(0);
const weddingDate = mydate.getTime();

let music = document.querySelector('audio')
music.volume = 0.4;
window.addEventListener("DOMContentLoaded", event => {
    musiqa()
});
function musiqa(){
    music.play()
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelectorAll('.time')[0].style.display = "none";
        document.querySelectorAll('.time')[1].style.display = "none";
        document.querySelectorAll('.time')[2].style.display = "none";
        document.querySelectorAll('.time')[3].style.display = "none";
        document.querySelector('.end').style.display = "block";
    }

}
// updateCountdown()
const interval = setInterval(updateCountdown, 1000);