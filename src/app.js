/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello");
};

let randomIndex = array => {
  return Math.floor(Math.random() * array.length);
};

let generateExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = `${who[randomIndex(who)]} ${what[randomIndex(what)]} my code ${
    when[randomIndex(when)]
  }!`;

  return excuse;
};
