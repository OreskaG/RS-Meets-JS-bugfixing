# Баг 3 — Стрелка «влево» ломается на первом слайде

## Что происходит

На первом слайде клик по стрелке «‹» вызывает ошибку или показывает пустоту.

## Почему так происходит

Индекс уходит в отрицательные числа:

```js
// ❌ Баг
prevBtn.addEventListener('click', function () {
  current = current - 1;
  show(current); // при current = 0 получаем show(-1), slides[-1] = undefined
});
```

## Как исправить

Нельзя использовать `%` напрямую для отрицательных чисел в JavaScript: `-1 % 6 = -1` (остаток отрицательный). Нужна небольшая поправка:

```js
// ✅ Исправление
prevBtn.addEventListener('click', function () {
  current = (current - 1 + slides.length) % slides.length;
  show(current);
});
// При current = 0: (0 - 1 + 6) % 6 = 5 % 6 = 5 — последний слайд
```

## Как лучше

Добавление `slides.length` перед `%` — стандартный приём для «безопасного» декремента по кругу в JavaScript. Запомни оба варианта:
- Вперёд: `(current + 1) % length`
- Назад: `(current - 1 + length) % length`
