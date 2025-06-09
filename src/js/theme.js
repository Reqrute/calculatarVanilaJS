const themeSwitcher = document.getElementById('themeSwitcher');
themeSwitcher.addEventListener('change', () => {
  document.body.classList.toggle('light-theme');
});
