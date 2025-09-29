// Target date: October 1, 2025, 3:00 PM PST
const target = new Date('October 1, 2025 15:00:00 GMT-0800');

function updateCountdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<span style="font-size:2rem; color:#e50914;">The Subathon is live!</span>';
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();