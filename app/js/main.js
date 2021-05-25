let str = "";
let m = 0;
let result;

$(".number").on("click", function (event) {
  if (str === result) {
    str = "";
    $(".display").text("");
  }
  let symbol = $(this).text();
  $(".display").append(symbol);
  str += symbol;
});

$(".inner_clear").on("click", function (event) {
  str = "";
  $(".display").text("");
});

$(".memory_plus").on("click", function (event) {
  m = String($(".display").text());
});

$(".memory_r").on("click", function (event) {
  str += m;
  $(".display").text(str);
});

$(".square_root").on("click", function (event) {
  result = Math.sqrt(Number(str));
  $(".display").text(result);
  str = result;
});

$(".cube_root").on("click", function (event) {
  result = Math.cbrt(Number(str));
  $(".display").text(result);
  str = result;
});

$(".pi").on("click", function (event) {
  $(".display").append(Math.PI.toFixed(5));
  str += Math.PI.toFixed(5);
});

$(".percent").on("click", function (event) {
  if (
    str[str.length - 1] == "+" ||
    str[str.length - 1] == "-" ||
    str[str.length - 1] == "*" ||
    str[str.length - 1] == "/"
  ) {
    result = (eval(str.slice(0, -1)) * eval(str.slice(0, -1))) / 100;
    str += result;
    $(".display").append(result);
    console.log(str);
  }
});

$(".squere").on("click", function (event) {
  result = Math.pow(Number(str), 2);
  $(".display").text(result);
  str = result;
});

$(".cube").on("click", function (event) {
  result = Math.pow(Number(str), 3);
  $(".display").text(result);
  str = result;
});

$(".plus").on("click", function (event) {
  if (str[str.length - 1] !== "+") {
    str += "+";
    $(".display").append("+");
  }
});

$(".minus").on("click", function (event) {
  if (str[str.length - 1] !== "-") {
    str += "-";
    $(".display").append("-");
  }
});

$(".multiply").on("click", function (event) {
  if (str[str.length - 1] !== "*") {
    str += "*";
    $(".display").append("*");
  }
});

$(".divide").on("click", function (event) {
  if (str[str.length - 1] !== "/") {
    str += "/";
    $(".display").append("/");
  }
});

$(".dot").on("click", function (event) {
  if (str[str.length - 1] !== ".") {
    str += ".";
    $(".display").append(".");
  }
  console.log(str);
});

$(".iner_result").on("click", function (event) {
  result = eval(str);
  $(".display").text(result);
  str = result;
});
