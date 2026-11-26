// PORTAFOLIO ACADÉMICO - JAVASCRIPT BÁSICO
// 1. Alternar tema claro y oscuro.
// 2. Buscar trabajos por título, descripción o tecnología.

// Seleccionamos los elementos del HTML que vamos a utilizar.
const themeButton = document.getElementById("theme-button");
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const emptyMessage = document.getElementById("empty-message");

// Al abrir la página, recuperamos el tema que se había elegido.
const savedTheme = localStorage.getItem("portfolio-theme-simple");
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Actualizamos el ícono y el texto accesible del botón.
function updateThemeButton() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeButton.innerHTML = isDark
    ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
    : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
  themeButton.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
}

updateThemeButton();

// Cuando se hace clic, cambiamos entre los dos temas.
themeButton.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("portfolio-theme-simple", newTheme);
  updateThemeButton();
});

// Cada vez que se escribe, mostramos solo las tarjetas coincidentes.
searchInput.addEventListener("input", function () {
  const search = searchInput.value.toLowerCase().trim();
  let visibleCards = 0;

  cards.forEach(function (card) {
    const content = card.textContent.toLowerCase();
    const matches = content.includes(search);

    card.hidden = !matches;
    if (matches) visibleCards++;
  });

  emptyMessage.hidden = visibleCards > 0;
});

// 3. Apartado especial: insertar contenido HTML desde JavaScript.
// innerHTML interpreta etiquetas como <h3>, <p> y <strong>.
const demoButton = document.getElementById("demo-button");
const demoResult = document.getElementById("demo-result");
let demoVisible = false;

demoButton.addEventListener("click", function () {
  demoVisible = !demoVisible;

  if (demoVisible) {
    // El contenido es fijo y está definido por el desarrollador.
    demoResult.innerHTML = `
      <h3>¡Contenido generado con JavaScript!</h3>
      <p>Este texto no estaba escrito originalmente dentro del contenedor.</p>
      <p>La propiedad <strong>innerHTML</strong> agregó un título, dos párrafos y una etiqueta de énfasis.</p>
    `;
    demoButton.textContent = "Restablecer ejemplo";
  } else {
    demoResult.innerHTML = "<p>Presioná el botón para generar contenido con <code>innerHTML</code>.</p>";
    demoButton.textContent = "Mostrar ejemplo";
  }
});
