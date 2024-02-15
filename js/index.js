celciusreamur = () => {
  let input = document.getElementById("input-suhu").value;
  let hasil = (9 / 5) * input + 32;
  document.getElementById("hasil").value = hasil + " F";
};
