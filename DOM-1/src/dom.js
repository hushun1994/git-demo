// 对象风格（也叫命名空间风格）window.dom是我们提供的全局对象

window.dom = {
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
};

// 新增元素
dom.create = (html) => {
  const container = document.createElement("template");
  container.innerHTML = html.trim();
  return container.content.firstChild;
};

dom.after = (node, newNode) => {
  node.parentNode.insertBefore(newNode, node.nextSibling);
};

dom.before = (node, newNode) => {
  node.parentNode.insertBefore(newNode, node);
};

dom.append = (parent, newNode) => {
  parent.appendChild(newNode);
};

dom.wrap = (node, parent) => {
  dom.before(node, parent);
  dom.append(parent, node);
};

// 删除元素
dom.remove = (node) => {
  node.parentNode.removeChild(node);
  return node;
};

dom.empty = (node) => {
  const array = [];
  let x = node.firstChild;
  while (x) {
    array.push(dom.remove(node.firstChild));
    x = node.firstChild;
  }
  return array;
};

// 设置或读取元素属性
dom.attr = function (node, name, value) {
  if (arguments.length == 3) {
    node.setAttribute(name, value);
  } else if (arguments.length === 2) {
    return node.getAttribute(name);
  } else {
    console.log("参数错误");
  }
};

// 修改文本
dom.text = function (node, newText) {
  if (arguments.length === 2) {
    if ("innerText" in node) {
      node.innerText = newText;
    } else {
      node.textContent = newText;
    }
  } else if (arguments === 1) {
    if ("innerText" in node) {
      return node.innerText;
    } else {
      return node.textContent;
    }
  } else {
    console.log("参数错误");
  }
};

// 修改html 结构
dom.html = function (node, newHtml) {
  if (arguments.length === 2) {
    node.innerHTML = newHtml;
  } else if (arguments.length === 1) {
    return node.innerHTML;
  } else {
    console.log("参数错误");
  }
};

// 添加或者读取样式属性
dom.style = function (node, name, value) {
  if (arguments.length === 3) {
    node.style[name] = value;
  } else if (arguments.length === 2) {
    if (typeof name === "string") {
      return node.style[name];
    } else {
      let object = name;
      for (let key in object) {
        node.style[key] = object[key];
      }
    }
  } else {
    console.log("参数错误");
  }
};

// 添加事件监听
dom.on = (node, eventName, handle) => {
  node.addEventListener(eventName, handle);
};

// 移除事件监听
dom.off = (node, eventName, handle) => {
  node.removeEventListener(eventName, handle);
};

// 查
dom.find = (selector, scoped) => {
  return (scoped || document).querySelectorAll(selector);
};

dom.parent = (node) => {
  return node.parentNode;
};

dom.children = (node) => {
  return node.children;
};

dom.siblings = (node) => {
  return Array.from(node.parentNode.children).filter((item) => {
    return item !== node;
  });
};

dom.next = (node) => {
  let x = node.nextSibling;
  while (x && x.nodeType === 3) {
    x = x.nextSibling;
  }
  return x;
};

dom.previous = (node) => {
  let x = node.previousSibling;
  while (x && x.nodeType === 3) {
    x = x.previousSibling;
  }
  return x;
};

dom.each = (nodeList, fn) => {
  for (let i = 0; i < nodeList.length; i++) {
    fn.call(null, nodeList[i]);
  }
};

dom.index = (node) => {
  let list = dom.children(node.parentNode);
  let index = 0;
  while (list[index] !== node) {
    index += 1;
  }
  return index;
};
