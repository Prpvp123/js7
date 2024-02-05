var field = document.getElementById('field');
var ball = document.getElementById('ball');

field.addEventListener('click', function(event) {
  var fieldRect = field.getBoundingClientRect();
  var ballRect = ball.getBoundingClientRect();

  var newLeft = event.clientX - fieldRect.left - ballRect.width / 2;
  var newTop = event.clientY - fieldRect.top - ballRect.height / 2;

  newLeft = Math.max(0, Math.min(newLeft, fieldRect.width - ballRect.width));
  newTop = Math.max(0, Math.min(newTop, fieldRect.height - ballRect.height));

  ball.style.left = newLeft + 'px';
  ball.style.top = newTop + 'px';
});
