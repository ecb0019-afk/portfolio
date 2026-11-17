// 1. Tooltips de Bootstrap
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new bootstrap.Tooltip(el));

// 2. Validación del formulario de contacto con Bootstrap
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (evento) => {
  if (!formulario.checkValidity()) {
    evento.preventDefault();
    evento.stopPropagation();
    formulario.querySelector(':invalid').focus();
  }
  formulario.classList.add('was-validated');
});
