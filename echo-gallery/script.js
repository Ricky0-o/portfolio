const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});