const slides = [
  { src: 'https://placehold.co/700x400/0f3460/ffcc00?text=Mountains', caption: 'Горы на рассвете' },
  { src: 'https://placehold.co/700x400/16213e/ffcc00?text=Forest', caption: 'Утро в лесу' },
  { src: 'https://placehold.co/700x400/1a1a2e/ffcc00?text=Ocean', caption: 'Океанский берег' },
  { src: 'https://placehold.co/700x400/0f3460/ff6b6b?text=Desert', caption: 'Закат в пустыне' },
  { src: 'https://placehold.co/700x400/16213e/4ecdc4?text=City', caption: 'Городские огни' }
];

const mainImg = document.getElementById('main-img');
const captionEl = document.getElementById('caption');
const thumbsEl = document.getElementById('thumbs');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;

function show(index) {
  mainImg.src = slides[index].src;
  captionEl.textContent = slides[index].caption;
  current = index;
}

function buildThumbs() {
  for (var i = 0; i < slides.length; i++) {
    const t = document.createElement('img');
    t.src = slides[i].src;
    t.alt = slides[i].caption;
    t.addEventListener('click', function () {
      show(i);
    });
    thumbsEl.appendChild(t);
  }
}

prevBtn.addEventListener('click', function () {
  current = current - 1;
  show(current);
});

nextBtn.addEventListener('click', function () {
  current = current + 1;
  show(current);
});

buildThumbs();
