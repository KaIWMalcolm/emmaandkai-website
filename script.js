// Set the date/time you started going out (YYYY-MM-DDTHH:MM:SS)
const startDate = new Date("2023-09-11T15:30:03");

function updateTimer() {
  const now = new Date();
  const elapsed = now - startDate; // difference in milliseconds

  // Calculate days, hours, minutes, seconds
  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);

  // Compute remainder for hours, minutes, seconds
  const displayDays = days;
  const displayHours = hours % 24;
  const displayMinutes = minutes % 60;
  const displaySeconds = seconds % 60;

  // Update HTML
  document.getElementById("days").textContent = displayDays;
  document.getElementById("hours").textContent = displayHours;
  document.getElementById("minutes").textContent = displayMinutes;
  document.getElementById("seconds").textContent = displaySeconds;
}

// Update the timer immediately & then every second
updateTimer();
setInterval(updateTimer, 1000);