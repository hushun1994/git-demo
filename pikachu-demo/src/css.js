let str = `/**
* 你好，这是一个dynamic html demo
* 我打算用 HTML+CSS 画一个皮卡丘
* 接下来我要添加样式了
**/
/* 首先给皮卡丘定制一款皮肤 */
.skin {
  width: 100vw;
  height: 50vh;
  background: lightgreen;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
/* 然后开始画一个小爱心鼻子 */
.skin .nose {
  position: relative;
}
.skin .nose .triangle {
  width: 0;
  height: 0;
  border: 10px solid #000;
  position: absolute;
  left: 50%;
  margin-top: 100px;
  margin-left: -10px;
  border-color: #000 transparent transparent transparent;
}
.skin .nose .circle {
  background: #000;
  border-radius: 8px 8px 0 0;
  width: 20px;
  height: 6px;
  position: absolute;
  top: -16px;
  left: -10px;
}
/* 接下来让我们来给它俏皮的小鼻子挠挠痒 */
@keyframes shaking {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.skin .nose:hover {
  animation: shaking 1s linear infinite;
}
/* 接下来画一对可爱迷人的大眼睛 */
.skin .eye {
  position: absolute;
  width: 64px;
  height: 64px;
  border: 2px solid #000;
  border-radius: 50%;
  background: #333;
  left: 50%;
  margin-left: -32px;
  margin-top: 50px;
}
.skin .eye.left {
  transform: translateX(-100px);
}
.skin .eye.right {
  transform: translateX(100px);
}
.skin .eye::before {
  content: "";
  display: block;
  border: 2px solid #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #fafafa;
  opacity: 0.95;
  position: absolute;
  left: 8px;
  top: 1px;
}
/* 然后是一张超卡哇伊的嘴巴 */
.skin .mouth {
  width: 160px;
  height: 160px;
  position: absolute;
  left: 50%;
  top: 144px;
  margin-left: -80px;
}
.mouth .up {
  position: relative;
}
.mouth .up .lip {
  border: 5px solid #000;
  border-top-color: transparent;
  width: 80px;
  height: 25px;
  position: absolute;
  background: lightgreen;
  top: -9px;
  z-index: 10;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 30px;
  border-right-color: transparent;
  left: -1px;
  transform: rotate(-15deg);
}
.mouth .up .lip.right {
  border-radius: 0 0 30px 0;
  border-left-color: transparent;
  left: 80px;
  transform: rotate(15deg);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 5px;
  height: 15px;
  background: lightgreen;
  position: absolute;
  top: 0;
}
.mouth .up .lip.left::before {
  left: 70px;
}
.mouth .up .lip.right::before {
  left: -5px;
}
/* 接下来把它性感的小胡子刮干净 */
.skin .cover {
  background: lightgreen;
  width: 160px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 125px;
  transform: translateX(-50%);
  z-index: 10;
}
.mouth .down {
  width: 100%;
  height: 180px;
  background: lightgreen;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -80px;
  overflow: hidden;
}
.mouth .down .circle1 {
  border: 4px solid #000;
  width: 100%;
  height: 600px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border-radius: 80px/300px;
  background: tomato;
  overflow: hidden;
}
.mouth .down .circle1 .circle2 {
  width: 300px;
  height: 500px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -360px;
  border-radius: 150px/250px;
  background: lightsalmon;
}
/* 最后是一对可爱的小脸颊 */
.cheek {
  border: 3px solid #000;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 160px;
  background: rgb(255, 255, 0);
}
.cheek.left {
  margin-left: -180px;
}
.cheek.right {
  margin-left: 180px;
}
/* 这样一个超级可爱迷人卡哇伊的皮卡皮卡丘就制作完成了 */
`;

export default str;
