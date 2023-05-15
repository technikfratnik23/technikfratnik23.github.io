function startTimer() {
  let startTime = Date.now();

  setInterval(() => {
    let elapsedTime = Date.now() - startTime;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 60000) % 60;
    let hours = Math.floor(elapsedTime / 3600000);

    document.getElementById('timer').textContent = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

window.addEventListener('load', startTimer);