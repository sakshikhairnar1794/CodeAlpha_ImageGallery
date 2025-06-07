let currentIndex = 0;
let images = [];

function openLightbox(img) {
  images = Array.from(document.querySelectorAll('.gallery-item')).filter(i => i.style.display !== 'none');
  currentIndex = images.indexOf(img);
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}
