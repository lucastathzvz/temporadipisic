// Assuming you're using JavaScript and the `now` variable represents the current time:
const seconds = now.seconds().toString().length === 1 ? '0' + now.seconds() : now.seconds();
$('#second1').html(seconds).append(now.format(' A'));
