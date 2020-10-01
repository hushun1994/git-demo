let html = document.querySelector("#html");
let style = document.querySelector("#style");

let timer;
let delay = 30;
let n = -1;

let str = `/**
 * 你好，这是一个dynamic html demo
 * 接下来我要加样式了
 * 我要加的样式是
 **/
/*画一个圆*/
#div1 {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: none;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
/*八卦是阴阳形成的一黑一白，添加一对双子星*/
#div1 {
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/* 形不逢影，影不离形，阴阳双生，形影不离。*/
@keyframes action {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#div1:hover {
  animation: action 2s linear 1s infinite;
}
`;

let str2 = "";

function step(delay) {
  timer = setTimeout(() => {
    if (n + 1 < str.length) {
      n += 1;
      if (str[n] === "\n") {
        str2 += "<br>";
      } else if (str[n] === " ") {
        str2 += "&nbsp";
      } else {
        str2 += str[n];
      }
      html.innerHTML = str2;
      window.scrollTo(0, 99999);
      html.scrollTo(0, 99999);
      style.innerHTML = str.substring(0, n);
      step(delay);
    }
  }, delay);
}

function debounce(fn, delay) {
  clearTimeout(timer);
  fn(delay);
}

debounce(step, delay);

slow.onclick = () => {
  delay = 50;
  debounce(step, delay);
};

average.onclick = () => {
  delay = 25;
  debounce(step, delay);
};

fast.onclick = () => {
  delay = 10;
  debounce(step, delay);
};
