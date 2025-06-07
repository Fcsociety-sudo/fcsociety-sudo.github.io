document.addEventListener('DOMContentLoaded', function () {
  new Splide('#news-slider', { type: 'loop', perPage: 1 }).mount();
  AOS.init();

  const toggle = document.querySelector('.theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
});
