function compareNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  const max = Math.max(num1, num2, num3);
  const min = Math.min(num1, num2, num3);

  const equal = (num1 === num2 && num2 === num3) ? "Sim" : "Não";
  const allDifferent = (num1 !== num2 && num2 !== num3 && num1 !== num3) ? "Sim" : "Não";

  document.getElementById("max").textContent = max;
  document.getElementById("min").textContent = min;
  document.getElementById("equal").textContent = equal;
  document.getElementById("all-different").textContent = allDifferent;

  document.getElementById("result").style.display = "block";
}
