function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber > 50) {
    randomNumber -= Math.floor(Math.random() * 26) + 1;
  }
  return randomNumber;
}

window.getRandomNumber = getRandomNumber;