const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

function showBuyTickets() {
  modal.classList.add('open');
}

function closeModalBuyTickets() {
  modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets);
}

const closeModalBtn = document.querySelector('.modal-close');
closeModalBtn.addEventListener('click', closeModalBuyTickets);

modal.addEventListener('click', closeModalBuyTickets);

modalContainer.addEventListener('click', function (event) {
  event.stopPropagation();
});

// Toggle Menu item mobile
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu');
const currentHeaderHeight = header.clientHeight;
mobileMenuBtn.onclick = function (event) {
  event.stopPropagation();
  header.style.height = header.clientHeight === currentHeaderHeight ? 'auto' : null;
};

// Hide menu when click
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (const item of menuItems) {
  const isParentMenu = item.nextElementSibling && item.nextElementSibling.contains('sub-nav');
  item.onclick = function (event) {
    if (!isParentMenu) {
      event.stopPropagation();
      header.style.height = null;
    } else {
      event.preventDefault();
    }
  };
}
document.onclick = function () {
  header.style.height = null;
};
