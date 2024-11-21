const counter = document.querySelector(".counter");
const parent = document.querySelector(".counter-container");
parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("increase")) {
    counter.textContent++;
  } else if (e.target.classList.contains("reset")) {
    counter.textContent = 0;
  } else {
    counter.textContent--;
  }
  if (counter.textContent == 0) {
    counter.style.color = "blue";
  } else if (counter.textContent > 0) {
    counter.style.color = "green";
  } else if (counter.textContent < 0) {
    counter.style.color = "red";
  }
});

window.onload = counter.style.color = "blue";
