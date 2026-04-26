# Баг 1 — Кнопка «Посчитать» не реагирует на клик

## Что происходит

При нажатии на кнопку «Посчитать» ничего не происходит — расчёт не запускается.

## Почему так происходит

Переменная `calcBtn` ищет элемент по CSS-классу `.btn`, которого не существует в HTML:

```js
// ❌ Баг
const calcBtn = document.querySelector('.btn');
```

В HTML кнопка имеет `id="calc"`, а не класс `btn`. Поэтому `querySelector('.btn')` возвращает `null`, и вызов `.addEventListener` на `null` падает с ошибкой ещё при загрузке страницы.

## Как исправить

```js
// ✅ Исправление
const calcBtn = document.getElementById('calc');
// или
const calcBtn = document.querySelector('#calc');
```

## Как лучше

`getElementById('calc')` чуть быстрее `querySelector('#calc')` — он ищет только по `id`, без разбора CSS-селектора. Для получения единственного элемента по `id` используй именно `getElementById`.
