/* eslint-disable no-multi-assign */

function main() {
  // Initialize time variable
  let hours;
  let minutes;
  let seconds;

  // Get date Object and store in a variable
  const date = new Date();

  // Set time variables accordinly
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  // To format time text (00:00:00)
  if (hours < 10) {
    // 00-09
    hours = hours = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  }

  if (minutes < 10) {
    // 00-09
    minutes = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  }

  if (seconds < 10) {
    // 00-09
    seconds = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  }

  // Set time and color variables
  const time = `${hours}:${minutes}:${seconds}`;
  const color = `#${hours}${minutes}${seconds}`;

  // Update the DOM
  document.getElementById('text').textContent = time;
  document.getElementById('text2').textContent = color;

  // Change background color using the time
  const body = document.getElementById('main');
  body.style.background = color;
}

window.setInterval(main, 1000);
