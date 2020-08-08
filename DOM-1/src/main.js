const div = dom.find("#test>.red")[0];

dom.style(div, "color", "red");

const divList = dom.find(".green");

dom.each(divList, (item) => {
  dom.style(item, "color", "lightgreen");
});
