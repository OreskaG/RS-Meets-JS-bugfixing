const products = [
  { name: 'iPhone 14', category: 'phone', price: 79990 },
  { name: 'Samsung Galaxy S23', category: 'phone', price: 74990 },
  { name: 'Xiaomi 13', category: 'phone', price: 49990 },
  { name: 'MacBook Air M2', category: 'laptop', price: 119990 },
  { name: 'Lenovo ThinkPad X1', category: 'laptop', price: 154990 },
  { name: 'ASUS ZenBook 14', category: 'laptop', price: 89990 },
  { name: 'AirPods Pro', category: 'audio', price: 22990 },
  { name: 'Sony WH-1000XM5', category: 'audio', price: 39990 },
  { name: 'JBL Charge 5', category: 'audio', price: 14990 }
];

const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');
const listEl = document.getElementById('list');
const foundEl = document.getElementById('found');

function update() {
  const query = searchInput.value;
  const category = categorySelect.value;
  const sortMode = sortSelect.value;

  let result = products.filter(function (p) {
    const matchCategory = category === 'all' || p.category === category;
    const matchSearch = p.name.includes(query);
    matchCategory && matchSearch;
  });

  if (sortMode === 'asc') {
    result = products.sort(function (a, b) { return a.price - b.price; });
  } else if (sortMode === 'desc') {
    result = products.sort(function (a, b) { return b.price - a.price; });
  }

  for (const p of result) {
    const li = document.createElement('li');
    li.innerHTML =
      '<h3>' + p.name + '</h3>' +
      '<p class="cat">' + p.category + '</p>' +
      '<p class="price">' + p.price.toLocaleString('ru-RU') + ' ₽</p>';
    listEl.appendChild(li);
  }

  foundEl.textContent = 'Найдено: ' + products.length;
}

searchInput.addEventListener('input', update);
categorySelect.addEventListener('change', update);
sortSelect.addEventListener('change', update);

update();
