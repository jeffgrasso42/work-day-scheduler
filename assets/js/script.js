// DEPENDENCIES
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js

// ASSIGNMENT CODE
var currentHour = new Date().getHours();

// populates container div with schedule
function init() {
  // creates rows for 9AM-5PM
  for (var i = 9; i < 18; i++) {
    var colorKey = "";
    // check if the current hour is after the hour on the scheduler
    if (currentHour > i) {
      colorKey = "past";
      // check if the current hour is the same as on the scheduler
    } else if (currentHour === i) { 
      colorKey = "present";
    } else { // hour is before hour on the schedule
      colorKey = "future";
    }
  
    var hourDisplay = "";
  
    // check if the hour on the row is before noon
    if (i < 12) {
      hourDisplay = i + "AM";
    } else if (i === 12) { // check if the hour is noon
      hourDisplay = i + "PM";
    } else {
      hourDisplay = i - 12 + "PM"; // convert hour to 12 hour time
    }
    
    // create div element to contain an hour row 
    var row = $("<div>").addClass("row time-block");
    // create div element for hour
    var hour = $("<div>").addClass("col-2 hour").text(hourDisplay);
    // create textarea element to get and store user input
    var textArea = $("<textarea>")
      .addClass("col-8 description " + colorKey)
      // i matches the hourKey stored in local storage
      .val(localStorage.getItem(i)); 
    // create button element with click event
    var saveBtn = $("<button>")
      .attr("id", i)
      .addClass("col-2 saveBtn")
      .click(function () {
        // get the hour of the row from the button's id
        var hourKey = $(this).attr("id");
        // get user input from the textarea
        var activity = $(this).siblings(".description").val();
        // preserve the hourKey and input
        localStorage.setItem(hourKey, activity);
      });
    // floppy-disc icon for button element
    var icon = $("<i>").addClass("fas fa-save");
  
    // add created elements and their content to container element
    $(".container").append(row.append(hour, textArea, saveBtn.append(icon)));
  }
}

// INITIALIZATION
init();