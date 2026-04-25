const slides = [
  { src: 'assets/4-Desert.jpeg', caption: 'Закат в пустыне' },
  { src: 'assets/4-Forest.webp', caption: 'Утро в лесу' },
  { src: 'assets/4-Hills.webp', caption: 'Холмы в тумане' },
  { src: 'assets/4-Ocean.jpg', caption: 'Океанский берег' },
  { src: 'assets/4-Spring.jpg', caption: 'Весенний сад' },
  { src: 'assets/4-sunset.jpg', caption: 'Закат над горизонтом' }
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
