import str from "./css";

const style = document.querySelector("#style");
const content = document.querySelector("#content");
const controler = document.querySelector("#controler");
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");
const slow = document.querySelector("#slow");
const average = document.querySelector("#average");
const fast = document.querySelector("#fast");
const reload = document.querySelector("#reload");

let n = -1;
let str2 = "";
let delay = 25;
let timer = undefined;

let step = (delay) => {
  timer = setTimeout(() => {
    if (n < str.length - 1) {
      n += 1;
      if (str[n] === "\n") {
        str2 += "<br>";
      } else if (str[n] === " ") {
        str2 += "&nbsp";
      } else {
        str2 += str[n];
      }
      content.innerHTML = str2;
      style.innerHTML = str.substring(0, n);
      content.scrollTo(0, 9999);
      step(delay);
    }
  }, delay);
};

let run = (fn, delay) => {
  clearTimeout(timer);
  fn(delay);
};

let stop = () => {
  window.clearTimeout(timer);
};

run(step, delay);

controler.addEventListener("click", (e) => {
  switch (e.target) {
    case pause:
      stop();
      break;
    case play:
      run(step, delay);
      break;
    case slow:
      delay = 50;
      run(step, delay);
      break;
    case average:
      delay = 25;
      run(step, delay);
      break;
    case fast:
      delay = 5;
      run(step, delay);
      break;
    case reload:
      location.reload();
      break;
    default:
      return;
  }
});
