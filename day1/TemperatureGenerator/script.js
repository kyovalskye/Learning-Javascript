document.getElementById("convert").onclick = () => {
  const c = +document.getElementById("celsius").value;
  if (isNaN(c)) {
    document.getElementById("output").innerText = "Input harus angka.";
    return;
  }
  document.getElementById("output").innerText = `Fahrenheit: ${(
    (c * 9) / 5 +
    32
  ).toFixed(2)} °F, Kelvin: ${(c + 273.15).toFixed(2)} K`;
};