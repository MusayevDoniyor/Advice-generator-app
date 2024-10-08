const adviceNumber = document.getElementById("advice-number");
const adviceText = document.getElementById("adviceText");
const dice = document.getElementById("dice");

window.onload = showQuote;

dice.addEventListener("click", function () {
  showQuote();
});

function showQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNumber.textContent = data.id;
      adviceText.textContent = data.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
}
