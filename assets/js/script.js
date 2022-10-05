// create grid where 1 hour = 1 row
// create inputs for each hour
// get activity input from user
// add button for each hour
// add click event to save activity to local storage

for (var i = 9; i < 18; i++) {
  var row = $('<div>').addClass('row time-block').attr('id', i);
  var hour = $('<div>').addClass('col-2 hour').text(i);
  var textArea = $('<textarea>').addClass('col-8 description');
  var saveBtn = $('<button>').attr('id', i).addClass('col-2 saveBtn').click(function () {
    var hourKey = $(this).attr('id');

    var activity = $(this).siblings('.description').val();
    console.log(activity);
  })
  var icon = $('<i>').addClass('fas fa-save');

  $('.container').append(
    row.append(hour, textArea, saveBtn.append(icon)));
}