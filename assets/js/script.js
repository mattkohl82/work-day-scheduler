var clock = document.querySelector("#currentDay");

function updateTime() {
    const now = moment();
    const readTime = now.format("MMM DD, YYYY - hh:mm:ssA");
    
    clock.textContent = readTime;
}

setInterval(updateTime, 100);

updateTime();





//var currentTime = moment();

//timeWhereYouAre.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss A");

