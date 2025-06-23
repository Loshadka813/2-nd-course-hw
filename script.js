function guessNumber() {
    const targetNumb = Math.floor(Math.random() * 100) + 1;
    let i = 0;

    while (true) {
        const userGuess = prompt('Угадайте число от 1 до 100');
        i++;

        if (userGuess === null) {
            alert('Игра завершена');
            break;
        }

        const guess = parseInt(userGuess, 10);

        if (isNaN(guess)) {
            alert('Введите число.');
            continue;
        }

        if (guess === targetNumb) {
            alert(`Вы угадали число ${targetNumb}`);
            break;
        } else {
            if (guess < targetNumb) {
                alert("Загаданное число больше");
            } else {
                alert("Загаданное число меньше");
            }
        }
    }
}

