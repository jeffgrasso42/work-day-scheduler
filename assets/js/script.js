// create grid where 1 hour = 1 row
// create inputs for each hour
// get activity input from user
// add button for each hour
// add click event to save activity to local storage

var currentDate = new Date().getHours();
console.log(currentDate);

for (var i = 9; i < 18; i++) {
  var currentHour = new Date().getHours();
  var colorKey = '';
  if (currentHour > i) {
    colorKey = 'past';
  } else if (currentHour === i) {
    colorKey = 'present'
  } else {
    colorKey = 'future';
  }
  var row = $('<div>').addClass('row time-block').attr('id', i);
  var hour = $('<div>').addClass('col-2 hour').text(i);
  var textArea = $('<textarea>').addClass('col-8 description ' + colorKey).val(localStorage.getItem(i)); // i = hourKey
  var saveBtn = $('<button>').attr('id', i).addClass('col-2 saveBtn').click(function () {
    var hourKey = $(this).attr('id');

    var activity = $(this).siblings('.description').val();
    localStorage.setItem(hourKey, activity);
  })
  var icon = $('<i>').addClass('fas fa-save');

  $('.container').append(
    row.append(hour, textArea, saveBtn.append(icon)));
}