let digital = document.querySelector('.digital');
let sec = document.querySelector('.hand_sec');
let min = document.querySelector('.hand_min');
let hour = document.querySelector('.hand_hour');

function updateClock(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let secs = currentTime.getSeconds();

    digital.innerHTML = `${fix(hours)}:${fix(mins)}:${fix(secs)}`;

    let sec_degrees = 6 * secs - 90;
    let min_degrees = 6 * mins - 90;
    let hour_degrees = 30 * hours - 90;

    sec.style.transform = `rotate(${sec_degrees}deg)`;
    min.style.transform = `rotate(${min_degrees}deg)`;
    hour.style.transform = `rotate(${hour_degrees}deg)`;
}

function fix(time){
    if(time < 10){
        return '0' + time;
    }
    return time;
}

updateClock();
setInterval(updateClock, 1000);