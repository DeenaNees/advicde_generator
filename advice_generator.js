var diceBtn = document.getElementById("adviceBtn");
var adviceID = document.getElementById("adviceTitle");
var adviceContent = document.getElementById("adviceContent");

console.log(diceBtn, adviceID, adviceContent);

window.onload = getAdvice;

diceBtn.addEventListener("click", function () {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceID.textContent = "ADVICE #" + data.id;
      adviceContent.textContent = data.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
}
