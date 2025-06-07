document.addEventListener('DOMContentLoaded', function () {
  // Инициализация слайдера
  new Splide('#news-slider', { type: 'loop', perPage: 1 }).mount();

  // Инициализация AOS
  AOS.init();

  // Переключение темы
  const toggle = document.querySelector('.theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  // Восстановление темы из localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  // Бургер меню - переключаем класс 'open'
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
