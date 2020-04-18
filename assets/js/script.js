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




var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

        if (!tasks) {
            tasks = {
                toDo: []
            };
        }
};



// save button in modal was clicked
$(".saveBtn").click(function() {
    // get form values
    var taskText = $(".info").val();
    
    // save in tasks array
      tasks.toDo.push({
        text: taskText,
      });
  
      saveTasks();
    
});

loadTasks();







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






