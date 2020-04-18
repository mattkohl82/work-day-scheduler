var clock = document.querySelector("#currentDay");

function updateTime() {
    const now = moment();
    const readTime = now.format("MMM DD, YYYY - hh:mm:ssA");
    
    clock.textContent = readTime;
}

setInterval(updateTime, 100);

updateTime();



function infoColorChange() {
    var currentHour = moment().hour();
    $(".row").each(function() {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);
        if(hourBlock < currentHour) {
            $(this).addClass("past");
        } else if(hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        }
    });
}

infoColorChange();
let hour = setInterval(infoColorChange, 10000)