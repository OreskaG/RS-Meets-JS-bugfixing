# Баг 1 — Фильтрация не работает, список всегда пустой

## Что происходит

При любом выборе категории или вводе в поиск список товаров становится пустым.

## Почему так происходит

Функция-фильтр внутри `.filter()` не возвращает результат:

```js
// ❌ Баг
let result = products.filter(function (p) {
  const matchCategory = category === 'all' || p.category === category;
  const matchSearch = p.name.includes(query);
  // Нет return! Функция возвращает undefined
});
// filter с undefined = все элементы отбрасываются → пустой массив
```

Метод `.filter()` оставляет только те элементы, для которых callback вернул `true`. Если callback ничего не возвращает — он возвращает `undefined`, которое равно `false`. Результат — всегда пустой массив.

## Как исправить

```js
// ✅ Исправление
let result = products.filter(function (p) {
  const matchCategory = category === 'all' || p.category === category;
  const matchSearch = p.name.includes(query);
  return matchCategory && matchSearch; // добавить return!
});
```

## Как лучше

Это одна из самых частых ошибок с методами массивов (`filter`, `map`, `find`, `reduce`). Они все зависят от возвращаемого значения callback. Правило: если используешь `filter` или `map` — **всегда проверяй, что есть `return`**.
