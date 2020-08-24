import str from "./css";

const player = {
  str: str,
  str2: "",
  n: -1,
  delay: 25,
  timer: undefined,
  init: () => {
    player.run(player.step, player.delay);
    player.bindEvents();
  },
  ui: {
    style: document.querySelector("#style"),
    content: document.querySelector("#content"),
    controler: document.querySelector("#controler"),
    pause: document.querySelector("#pause"),
    play: document.querySelector("#play"),
    slow: document.querySelector("#slow"),
    average: document.querySelector("#average"),
    fast: document.querySelector("#fast"),
    reload: document.querySelector("#reload"),
  },
  step: (delay) => {
    player.timer = setTimeout(() => {
      if (player.n < player.str.length - 1) {
        player.n += 1;
        if (player.str[player.n] === "\n") {
          player.str2 += "<br>";
        } else if (player.str[player.n] === " ") {
          player.str2 += "&nbsp";
        } else {
          player.str2 += player.str[player.n];
        }
        player.ui.content.innerHTML = player.str2;
        player.ui.style.innerHTML = player.str.substring(0, player.n);
        player.ui.content.scrollTo(0, 9999);
        player.step(delay);
      }
    }, delay);
  },
  run: (fn, delay) => {
    player.stop();
    fn(delay);
  },
  stop: () => {
    window.clearTimeout(player.timer);
  },
  bindEvents: () => {
    controler.addEventListener("click", (e) => {
      switch (e.target) {
        case player.ui.pause:
          player.stop();
          break;
        case player.ui.play:
          player.run(player.step, player.delay);
          break;
        case player.ui.slow:
          player.delay = 50;
          player.run(player.step, player.delay);
          break;
        case player.ui.average:
          player.delay = 25;
          player.run(player.step, player.delay);
          break;
        case player.ui.fast:
          player.delay = 5;
          player.run(player.step, player.delay);
          break;
        case player.ui.reload:
          location.reload();
          break;
        default:
          return;
      }
    });
  },
};

player.init();
