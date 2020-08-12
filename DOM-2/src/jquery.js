window.$ = window.jQuery = (selectorOrArray) => {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  let api = Object.create(jQuery.prototype);
  Object.assign(api, {
    elements: elements,
    oldAPI: null,
  });

  return api;
};

jQuery.prototype = {
  jquery: true,
  constructor: jQuery,
  find(selector) {
    let array = [];
    for (let i = 0; i < this.elements.length; i++) {
      let elements2 = Array.from(this.elements[i].querySelectorAll(selector));
      array = array.concat(elements2);
    }
    const newAPI = jQuery(array);
    newAPI.oldAPI = this;
    return newAPI;
  },
  end() {
    return this.oldAPI;
  },
  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i);
    }
    return this;
  },
  addClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className);
    }
    return this;
  },
  parent() {
    const array = [];
    this.each((node) => {
      if (array.indexOf(node) === -1) {
        array.push(node.parentNone);
      }
      return jQuery(array);
    });
  },
  children() {
    const array = [];
    this.each((node) => {
      array.push(...node.children);
    });
    return jQuery(array);
  },
  print() {
    console.log(this.elements);
    return this;
  },
};
