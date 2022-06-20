const diceBtn = document.querySelector(".advice__button");
const adviceID = document.querySelector(".advice__title");
const adviceContent = document.querySelector(".advice__content");

console.log(diceBtn, adviceID, adviceContent);

diceBtn.addEventListener("click", () => {
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

getAdvice();
