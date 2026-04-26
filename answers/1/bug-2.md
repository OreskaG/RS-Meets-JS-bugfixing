# Баг 2 — Кнопка «−» не реагирует на клик

## Что происходит

Нажатие на кнопку «−» ничего не делает — никакой реакции в браузере.

## Почему так происходит

Переменная `decrementBtn` получена через `getElementById('decriment')` — в слове **опечатка**: пропущена буква `e`.

```js
// ❌ Баг
const decrementBtn = document.getElementById('decriment');
```

В HTML кнопка имеет `id="decrement"` (с `e`). Из-за несовпадения `getElementById` возвращает `null`, а вызов `.addEventListener` на `null` бросает ошибку ещё при загрузке страницы — поэтому кнопка «мертва».

## Как исправить

```js
// ✅ Исправление
const decrementBtn = document.getElementById('decrement');
```

## Как лучше

Всегда проверяй в DevTools (вкладка Console) — ошибка `Cannot read properties of null` почти всегда означает, что `getElementById` вернул `null`, то есть элемент с таким `id` не найден. Первым делом сравни строку в JS и `id` в HTML посимвольно.
