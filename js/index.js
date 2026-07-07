function updateISTClock() {
  const now = new Date();

  // Options to get time components in IST
  const options = {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short', 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  // Get parts in IST using a formatter for reliability
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const parts = formatter.formatToParts(now);
  const getPart = (type) => parts.find(p => p.type === type).value;

  const month = getPart('month');
  const day = getPart('day');
  const year = getPart('year');
  const hour = getPart('hour');
  const minute = getPart('minute');
  const second = getPart('second');
  const dayPeriod = getPart('dayPeriod'); // AM or PM

  // Construct the string: "July 7, 2026, 09:50:00 AM"
  // Note: hour is already 2-digit (e.g., "09") from hour: '2-digit'
  const istString = `Date: ${day} ${month}, ${year} | Time: ${hour}:${minute}:${second} ${dayPeriod}`;

  document.getElementById('footer-time').textContent = istString;
}

updateISTClock();
setInterval(updateISTClock, 1000);   