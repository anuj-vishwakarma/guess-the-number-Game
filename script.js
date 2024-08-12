'use-strict';

const loader = document.querySelector(".pre-loader");
function preLoader() {
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1100);
};

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (element, message) {
    document.querySelector(element).textContent = message;
};

document.querySelector(".check-btn").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        // document.querySelector(".alert").textContent = '⛔ Wrong Input';
        displayMessage(".alert", "⛔ Wrong Input!");
    }
    else if (guess >= 1 || guess <= 20) {
        if (guess === secretNumber) {
            if (score >= highScore) {
                highScore = score
                document.querySelector(".high-score").innerHTML = `🥇 High Score: ${highScore}`;
            }
            document.querySelector(".alert").innerHTML = "🎉 Correct Number";
            // document.querySelector(".correct-answer").textContent = guess;
            displayMessage(".correct-answer", guess);
            document.querySelector(".correct-answer").style.width = '20vmax';
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector("html").style.backgroundColor = "#60b347";
        }
        // when guess is wrong 
        else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector(".alert").innerHTML = guess > secretNumber ? "📈 Too high" : "📉 Too low!";
                score--;
                // document.querySelector(".score").textContent = `💯 Score: ${score}`;
                displayMessage(".score", `💯 Score: ${score}`);
            }
            else {
                document.querySelector(".alert").innerHTML = "📈 You've lost!";
                displayMessage(".score", '💯 Score: 0');
            }
        }
        // else if (guess > secretNumber) {
        //     if (score > 1) {
        //         score--;
        //         document.querySelector(".score").textContent = `💯 Score: ${score}`;
        //     }
        //     else {
        //         document.querySelector(".alert").innerHTML = "📈 You've lost!";
        //         document.querySelector(".score").textContent = `💯 Score: 0`;
        //     }
        // } else {
        //     if (score > 1) {
        //         document.querySelector(".alert").innerHTML = "📉 Too low!";
        //         score--;
        //         document.querySelector(".score").textContent = `💯 Score: ${score}`;
        //     } else {
        //         document.querySelector(".alert").innerHTML = "📈 You've lost!";
        //         document.querySelector(".score").textContent = `💯 Score: 0`;

        //     }
        // }
    }
    else {
        document.querySelector(".alert").innerHTML = "⛔ Wrong Input";
    }

    document.querySelector(".play-again").addEventListener("click", function () {
        secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
        score = 20;
        displayMessage(".score", '💯 Score: 0');
        displayMessage(".alert", "🤔 Start guessing...");
        document.querySelector(".correct-answer").innerHTML = '0';
        document.querySelector("body").style.backgroundColor = 'rgb(29, 29, 29)';
        document.querySelector("html").style.backgroundColor = 'rgb(29, 29, 29)';
    })
})

