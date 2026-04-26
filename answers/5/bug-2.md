# Баг 2 — Поиск не находит товары если писать с заглавной буквы

## Что происходит

Поиск «iphone» находит товар, а поиск «iPhone» или «IPhone» — нет.

## Почему так происходит

Метод `.includes()` чувствителен к регистру. Строка `"iPhone 14"` содержит `"iphone"`, но не содержит `"iPhone"` с большой буквы:

```js
// ❌ Баг
const matchSearch = p.name.includes(query);
// "iPhone 14".includes("iPhone") = true
// "iPhone 14".includes("IPHONE") = false ← не найдёт!
// "iPhone 14".includes("Iphone") = false ← не найдёт!
```

## Как исправить

Привести обе строки к одному регистру перед сравнением:

```js
// ✅ Исправление
const matchSearch = p.name.toLowerCase().includes(query.toLowerCase());
// "iphone 14".includes("iphone") = true ✓
// "iphone 14".includes("iphone") = true ✓ (из "IPHONE")
```

## Как лучше

Case-insensitive поиск — стандартное ожидание пользователей. Всегда нормализуй ввод пользователя и данные к одному регистру перед сравнением. Приводить к нижнему регистру (`toLowerCase`) — устоявшаяся практика (в отличие от `toUpperCase`, оба работают, но `toLowerCase` встречается чаще).
