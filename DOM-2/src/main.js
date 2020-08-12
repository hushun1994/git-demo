const api = $(".test");
api.addClass("test1");

const api2 = api.find(".t1");
api2.addClass("t2");

api2.end().addClass("test2");
