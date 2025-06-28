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


function arithmetic() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let result;

    if (operator === '/' && num2 === 0) {
        return arithmetic();
    }

    if (operator === '/' && num1 % num2 !== 0) {
        return arithmetic();
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    const userAnswer = prompt(`Сколько будет ${num1} ${operator} ${num2} = ?`);

    if (userAnswer === null) {
        alert('Игра завершена');
        return;
    }

    const answer = parseFloat(userAnswer);

    if (isNaN(answer)) {
        alert('Введите число.');
    } else if (answer === result) {
        alert('Правильно!');
    } else {
        alert(`Неправильно. Правильный ответ ${result}`);
    }
}


