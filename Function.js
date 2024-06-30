Function startGame() {
    score = 0;
    updateScore();
    startBtn.style.display = 'none';
    nextBtn.style.display = 'inline';
    correctBtn.style.display = 'inline';
    nextWord();
    startTimer();
}

function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordEl.textContent = currentWord;
}

function startTimer() {
    timer = 60;
    interval = setInterval(() => {
        timer--;
        timerEl.textContent = `Время: ${timer}`;
        if (timer <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(interval);
    wordEl.textContent = 'Игра окончена!';
    nextBtn.style.display = 'none';
    correctBtn.style.display = 'none';
    startBtn.style.display = 'inline';
    startBtn.textContent = 'Играть снова';
}

function correctGuess() {
    score++;
    updateScore();
    nextWord();
}

function updateScore() {
    scoreEl.textContent = `Очки: ${score}`;
}
