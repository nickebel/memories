(() => {
  const photos = [...document.querySelectorAll('.photo')];
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-image');
  const indexLabel = document.getElementById('lightbox-index');
  const count = document.getElementById('photo-count');
  const closeButton = document.getElementById('close-lightbox');
  const previousButton = document.getElementById('prev-photo');
  const nextButton = document.getElementById('next-photo');
  let currentIndex = 0;
  let lastFocused = null;

  count.textContent = String(photos.length).padStart(2, '0');
  document.getElementById('year').textContent = new Date().getFullYear();

  function showPhoto(index) {
    currentIndex = (index + photos.length) % photos.length;
    const source = photos[currentIndex].querySelector('img');
    image.src = source.src;
    image.alt = source.alt;
    indexLabel.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
  }

  function openPhoto(index) {
    lastFocused = document.activeElement;
    showPhoto(index);
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      closeButton.focus();
    }
  }

  function closePhoto() {
    if (dialog.open) dialog.close();
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  photos.forEach((photo) => {
    photo.addEventListener('click', () => openPhoto(Number(photo.dataset.index)));
  });
  closeButton.addEventListener('click', closePhoto);
  previousButton.addEventListener('click', () => showPhoto(currentIndex - 1));
  nextButton.addEventListener('click', () => showPhoto(currentIndex + 1));

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closePhoto();
  });

  document.addEventListener('keydown', (event) => {
    if (!dialog.open) return;
    if (event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(currentIndex + 1);
    if (event.key === 'Escape') closePhoto();
  });
})();
