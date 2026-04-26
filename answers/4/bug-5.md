# Баг 5 — Активная миниатюра не подсвечивается

## Что происходит

При переключении слайдов (стрелками или кликом) рамка активной миниатюры никогда не меняется.

## Почему так происходит

Функция `show(index)` меняет главное изображение и подпись, но не обновляет класс `active` на миниатюрах:

```js
// ❌ Баг
function show(index) {
  current = index;
  mainImg.src = slides[index].src;
  captionEl.textContent = slides[index].caption;
  // Класс active нигде не меняется — миниатюры не реагируют
}
```

## Как исправить

После смены слайда снять `active` со всех миниатюр и добавить нужной:

```js
// ✅ Исправление
function show(index) {
  current = index;
  mainImg.src = slides[index].src;
  captionEl.textContent = slides[index].caption;

  // Обновить активную миниатюру
  const thumbs = thumbsEl.querySelectorAll('img');
  thumbs.forEach(function (t) { t.classList.remove('active'); });
  thumbs[index].classList.add('active');
}
```

## Как лучше

Подсветка активного элемента — стандартный UI-паттерн. Хорошая привычка при написании функции отображения: сначала сбросить все активные состояния, потом установить нужное. Это надёжнее, чем пытаться отслеживать, какой элемент был активным до этого.
