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



$(document).ready(function() {
    $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var info = $(this).siblings(".info").val();
    localStorage.setItem(hour,info);
    });
})

$("#t-1 .info").val(localStorage.getItem("t-1"));
$("#t-2 .info").val(localStorage.getItem("t-2"));
$("#t-3 .info").val(localStorage.getItem("t-3"));
$("#t-4 .info").val(localStorage.getItem("t-4"));
$("#t-5 .info").val(localStorage.getItem("t-5"));
$("#t-6 .info").val(localStorage.getItem("t-6"));
$("#t-7 .info").val(localStorage.getItem("t-7"));
$("#t-8 .info").val(localStorage.getItem("t-8"));
$("#t-9 .info").val(localStorage.getItem("t-9"));
$("#t-10 .info").val(localStorage.getItem("t-10"));
$("#t-11 .info").val(localStorage.getItem("t-11"));
$("#t-12 .info").val(localStorage.getItem("t-12"));
$("#t-13 .info").val(localStorage.getItem("t-13"));
$("#t-14 .info").val(localStorage.getItem("t-14"));
$("#t-15 .info").val(localStorage.getItem("t-15"));
$("#t-16 .info").val(localStorage.getItem("t-16"));
$("#t-17 .info").val(localStorage.getItem("t-17"));
$("#t-18 .info").val(localStorage.getItem("t-18"));
$("#t-19 .info").val(localStorage.getItem("t-19"));
$("#t-20 .info").val(localStorage.getItem("t-20"));
$("#t-21 .info").val(localStorage.getItem("t-21"));
$("#t-22 .info").val(localStorage.getItem("t-22"));
$("#t-23 .info").val(localStorage.getItem("t-23"));
$("#t-24 .info").val(localStorage.getItem("t-24"));




$("#save-info-1").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-2").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-3").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-4").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-5").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-6").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-7").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-8").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-9").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-10").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-11").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-12").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-13").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-14").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-15").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-16").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-17").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-18").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-19").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-20").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-21").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-22").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-23").click(function() {
    alert( "Task has been saved!" );
  });

$("#save-info-24").click(function() {
    alert( "Task has been saved!" );
  });