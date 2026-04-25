const counterEl = document.getElementById('counter');
const statusEl = document.getElementById('status');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decriment');
const resetBtn = document.getElementById('reset');

let count = 0;

function render() {
  counterEl.textContent = count;
  if (count > 10) {
    statusEl.textContent = '🎉 Поздравляем, вы достигли 10!';
  }
}

incrementBtn.addEventListener('click', function () {
  count = count - 1;
  render();
});

decrementBtn.addEventListener('click', function () {
  count = count - 1;
  render();
});

resetBtn.addEventListener('click', function () {
  count = 1;
  statusEl.textContent = 'Нажми «+», чтобы начать считать';
  render();
});

render();
