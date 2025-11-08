const form = document.getElementById('formulario');
const tooltip = document.getElementById('tooltip');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  tooltip.classList.add('show');

  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 3000);

  form.reset();
});
