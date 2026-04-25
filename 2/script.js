const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const calcBtn = document.querySelector('.btn');
const resultEl = document.getElementById('result');

function calculate() {
  const bill = billInput.value;
  const tipPercent = tipInput.value;
  const people = peopleInput.value;

  const tipAmount = bill * tipPercent;
  const total = bill + tipAmount;
  const perPerson = total / tipAmount;

  resultEl.innerHTML =
    '<p>Чаевые: <strong>' + tipAmount.toFixed(2) + ' ₽</strong></p>' +
    '<p>Итого: <strong>' + total.toFixed(2) + ' ₽</strong></p>' +
    '<p>На человека: <strong>' + perPerson.toFixed(2) + ' ₽</strong></p>';
}

calcBtn.addEventListener('click', calculate);
