/* eslint-disable no-console */
/* jshint esversion: 6 */

function main() {
	// Initialize time variable
	let date, hours, minutes, seconds, body;

	// Get date Object and store in a variable
	date = new Date();

	// Set time variables accordinly
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();

	// To format time text (00:00:00)
	if (hours < 10) {
		// 00-09
		hours = hours = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
	}

	if (minutes < 10) {
		// 00-09
		minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
	}

	if (seconds < 10) {
		// 00-09
		seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
	}

	// Set time and color variables
	let time = `${hours}:${minutes}:${seconds}`;
	let color = `#${hours}${minutes}${seconds}`;

	// Update the DOM
	document.getElementById('text').textContent = time;
	document.getElementById('text2').textContent = color;

	// Change background color using the time
	body = document.getElementById('main');
	body.style.background = color;
}

window.setInterval(main, 1000);
