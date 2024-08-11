'use-strict';
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

document.querySelector(".check-btn").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".alert").textContent = '⛔ Wrong Input';
    }
    else if (guess >= 1 || guess <= 20) {
        if (guess === secretNumber) {
            if (score >= highScore) {
                highScore = score
                document.querySelector(".high-score").innerHTML = `🥇 High Score: ${highScore}`;
            }
            document.querySelector(".alert").innerHTML = "🎉 Correct Number";
            document.querySelector(".correct-answer").textContent = guess;
            document.querySelector(".correct-answer").style.width = '20vmax';
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector("html").style.backgroundColor = "#60b347";
        } else if (guess > secretNumber) {
            score--;
            document.querySelector(".score").textContent = `💯 Score: ${score}`;
            document.querySelector(".alert").innerHTML = "📈 Too high!";
        } else if (guess < secretNumber) {
            score--;
            document.querySelector(".score").textContent = `💯 Score: ${score}`;
            document.querySelector(".alert").innerHTML = "📉 Too low!";
        }
    }
    else {
        document.querySelector(".alert").innerHTML = "⛔ Wrong Input";
    }

    document.querySelector(".play-again").addEventListener("click", function () {
        secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
        score = 20;
        document.querySelector(".score").textContent = '💯 Score: 0';
        document.querySelector(".correct-answer").innerHTML = '0';
        document.querySelector("body").style.backgroundColor = 'rgb(29, 29, 29)';
        document.querySelector("html").style.backgroundColor = 'rgb(29, 29, 29)';
    })
})