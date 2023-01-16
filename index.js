import './css/styles.css';
import Age from "./calculator.js";

function displayAge() {
  let age = document.getElementById("ageInput").value;
  let expectancy = document.getElementById("expInput").value;
  
  const mercuryAge = new Age(age, expectancy);
  mercuryAge.mercury();
  mercuryAge.planetRemainder();
  let mercuryDisplay = `You are ${mercuryAge.earthAge} years old on mercury and ${mercuryAge.remainder}`;
  document.querySelector(".mer").innerText = mercuryDisplay;

  const venusAge = new Age(age, expectancy);
  venusAge.venus();
  venusAge.planetRemainder();
  let venusDisplay = `You are ${venusAge.earthAge} years old on venus and ${venusAge.remainder}`;
  document.querySelector(".ven").innerText = venusDisplay;

  const marsAge = new Age(age, expectancy);
  marsAge.mars();
  marsAge.planetRemainder();
  let marsDisplay = `You are ${marsAge.earthAge} years old on mars and ${marsAge.remainder}`;
  document.querySelector(".mar").innerText = marsDisplay;

  const jupiterAge = new Age(age, expectancy);
  jupiterAge.jupiter();
  jupiterAge.planetRemainder();
  let jupiterDisplay = `You are ${jupiterAge.earthAge} years old on jupiter and ${jupiterAge.remainder}`;
  document.querySelector(".jup").innerText = jupiterDisplay;
  

}

window.addEventListener("load", function () {
  document.getElementById("galaxy").addEventListener("submit", function (event) {
      event.preventDefault();
      displayAge();
    });
});

