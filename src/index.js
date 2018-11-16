function solveExpression() {
  var a = parseInt(document.querySelector("Prvek1").value);
  var b = parseInt(document.querySelector("Prvek2").value);
  var c = document.querySelector("operator").value;
  var Spocitej;

  if (c == "+") {
    Spocitej = a + b;
  } else if (c == "-") {
    Spocitej = a - b;
  } else if (c == ":") {
    Spocitej = a / b;
  } else if (c == "x") {
    Spocitej = a * b;
  }
  document.querySelector("vysledek").innerHTML = Spocitej;
}
