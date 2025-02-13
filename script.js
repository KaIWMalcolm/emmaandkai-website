// Set the date/time you started going out (YYYY-MM-DDTHH:MM:SS)
const startDate = new Date("2023-11-09T15:30:03");

function getTimeDifference(start, end) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();

  // Adjust seconds/minutes/hours
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  // Adjust days/months
  if (days < 0) {
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  // Adjust months/years
  if (months < 0) {
    months += 12;
    years--;
  }
  
  return { years, months, days, hours, minutes, seconds };
}

function updateTimer() {
  const now = new Date();
  const diff = getTimeDifference(startDate, now);
  
  document.getElementById("years").textContent = diff.years;
  document.getElementById("months").textContent = diff.months;
  document.getElementById("days").textContent = diff.days;
  document.getElementById("hours").textContent = diff.hours;
  document.getElementById("minutes").textContent = diff.minutes;
  document.getElementById("seconds").textContent = diff.seconds;
}

updateTimer();
setInterval(updateTimer, 1000);
