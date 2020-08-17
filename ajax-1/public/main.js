let n = 2;
getPage.onclick = () => {
  if (n < 4) {
    const request = new XMLHttpRequest();
    request.open("get", `/page${n}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const ul = document.getElementById("list");
          const li = document.createElement("li");
          li.textContent = item.id;
          ul.appendChild(li);
        });
        n += 1;
      }
    };
    request.send();
  } else {
    console.log("已经没有下一页了");
    getPage.disabled = true;
    getPage.style.cursor = "not-allowed";
  }
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let object;
      try {
        object = JSON.parse(request.response);
      } catch (error) {
        console.log("出错了，错误详情是：");
        console.log(error);
        object = { name: "no name", age: "unknow" };
      }
      console.log(object);
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/other.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载 HTML 失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/other.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onload = () => {
    console.log("成功了");
    console.log(request.response);
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
