# Portafolio Académico — Versión 2

Este repositorio contiene la segunda versión de mi portafolio académico, un sitio web donde reúno y presento los trabajos prácticos realizados durante la cursada. La idea de esta actualización fue conservar los trabajos originales y mejorar la presentación de la página principal, incorporando algunas funciones con JavaScript.

**[Ver el portafolio publicado](https://emmanuelgnzlz.github.io/portafolio-academico-v2/)**

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página, encabezado, secciones, tarjetas y enlaces.
- **CSS3:** estilos, colores, distribución de tarjetas con Grid, diseño adaptable y efectos visuales.
- **JavaScript:** búsqueda de trabajos en tiempo real y cambio entre modo claro y oscuro.
- **Font Awesome:** iconos utilizados en la interfaz.

No se utilizaron frameworks de JavaScript: el proyecto está desarrollado con HTML, CSS y JavaScript puro.

## Funcionalidades de la versión 2

- **Tarjetas rediseñadas:** cada trabajo cuenta con número, icono, descripción, etiquetas de tecnologías y un botón para abrirlo.
- **Buscador:** permite localizar trabajos escribiendo palabras que aparezcan en sus tarjetas, como `Flexbox`, `Grid`, `CSS` o `Trabajo 3`. Si no hay coincidencias, aparece un mensaje informativo.
- **Modo claro y oscuro:** se puede alternar desde el encabezado. La preferencia se guarda en el navegador mediante `localStorage`.
- **Diseño adaptable:** la distribución se ajusta a diferentes tamaños de pantalla mediante CSS.
- **Accesos directos:** enlaces a los cinco trabajos prácticos, GitHub y Google Drive.

## Trabajos prácticos

| Trabajo | Contenido principal |
| --- | --- |
| [TP 1](tps/trabajo-practico-1/) | Estructura HTML5 y modelo de cajas de CSS. |
| [TP 2](tps/trabajo-practico-2/) | Maquetación de una interfaz inspirada en React utilizando Flexbox. |
| [TP 3](tps/trabajo-practico-3/) | Catálogo de comercio electrónico con Flexbox, tarjetas y efectos visuales. |
| [TP 4](tps/trabajo-practico-4/) | Diseño de un layout semántico mediante CSS Grid y `grid-template-areas`. |
| [TP 5](tps/trabajo-practico-5/) | Landing page o sección principal (*hero*) combinando Grid y Flexbox. |

## Estructura del proyecto

```text
portafolio-academico-v2/
├── index.html          # Estructura de la página principal
├── styles.css          # Estilos de la página principal
├── script.js           # Buscador y cambio de tema
├── .gitattributes      # Configuración de Git
└── tps/
    ├── trabajo-practico-1/
    ├── trabajo-practico-2/
    ├── trabajo-practico-3/
    ├── trabajo-practico-4/
    └── trabajo-practico-5/
```

Cada carpeta de `tps` contiene los archivos correspondientes a ese trabajo y, cuando se necesitan, sus recursos gráficos.

## Cómo ejecutar el proyecto

1. Descargá o cloná este repositorio.
2. Abrí la carpeta del proyecto en Visual Studio Code.
3. Abrí `index.html` en un navegador, o utilizá la extensión Live Server.
4. Probá el buscador, el cambio de tema y los enlaces a los trabajos.

No se necesita instalar Node.js ni configurar una base de datos para ejecutar esta página estática. Los iconos de Font Awesome y la foto de perfil se cargan desde servicios externos, por lo que requieren conexión a Internet para visualizarse correctamente.

## ¿Qué cambió respecto de la versión inicial?

La **primera versión** fue desarrollada con HTML y CSS, y se centró en organizar los trabajos prácticos y presentar enlaces para acceder a cada uno. En esta **segunda versión**, mantuve los cinco trabajos y mejoré principalmente la página de inicio:

- Renovación estética de las tarjetas y de la presentación general.
- Incorporación de un buscador en tiempo real con JavaScript.
- Alternancia entre tema claro y oscuro, guardando la elección del usuario.
- Mejor organización visual y adaptación a distintos dispositivos.

Conservé ambas versiones en repositorios separados para poder compararlas y mostrar la evolución del proyecto durante el aprendizaje.

**[Ver versión original (V1)](https://emmanuelgnzlz.github.io/portafolio-academico/)** · **[Ver versión nueva (V2)](https://emmanuelgnzlz.github.io/portafolio-academico-v2/)**

## Publicación

La página está alojada mediante **GitHub Pages**, a partir de la rama `main` y la carpeta raíz del repositorio.

## Autor

**Emmanuel González**  
[Perfil de GitHub](https://github.com/EmmanuelGnzlz)


## Demostración de `innerHTML`

La versión incorpora un apartado especial con el botón **Mostrar ejemplo**. Al presionarlo, JavaScript utiliza `innerHTML` para insertar un título y párrafos con etiquetas HTML dentro de `#demo-result`. Al volver a presionarlo, restaura el mensaje inicial. El contenido es fijo y no proviene de entradas del usuario.
