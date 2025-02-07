# Portfolio de Arquitectura

Un sitio web minimalista y moderno para mostrar proyectos de arquitectura. Diseñado con HTML5, CSS3 y JavaScript vanilla.

## Características

- Diseño minimalista y elegante
- Totalmente responsive
- Galería de proyectos con vista detallada
- Formulario de contacto
- Optimizado para SEO
- Compatible con GitHub Pages

## Estructura del Proyecto

```
portfolio/
│
├── index.html
├── proyectos.html
├── contacto.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    └── proyecto1/
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
```

## Configuración

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/portfolio-arquitectura.git
```

2. Personaliza el contenido:
   - Actualiza la información en los archivos HTML
   - Modifica los estilos en `css/styles.css`
   - Agrega tus proyectos en `js/main.js`
   - Reemplaza las imágenes en la carpeta `img/`

3. Para usar tu dominio personalizado con GitHub Pages:
   - Agrega un archivo CNAME con tu dominio
   - Configura los registros DNS en GoDaddy:
     - Tipo A: apunta a 185.199.108.153
     - CNAME: www apunta a tu-usuario.github.io

## Uso

1. Abre `index.html` en tu navegador para ver el sitio localmente
2. Para agregar nuevos proyectos:
   - Agrega las imágenes en `img/proyecto-x/`
   - Actualiza el array `projects` en `js/main.js`
   - Agrega la tarjeta del proyecto en `proyectos.html`

## Personalización

### Colores
Los colores principales se pueden modificar en las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #333333;
    --secondary-color: #666666;
    --accent-color: #000000;
    --background-color: #ffffff;
    --text-color: #333333;
}
```

### Fuentes
Para cambiar las fuentes, modifica la propiedad `font-family` en el selector `body` en `styles.css`.

## Despliegue

1. Sube los cambios a GitHub:
```bash
git add .
git commit -m "Actualización del portfolio"
git push origin main
```

2. Configura GitHub Pages en la configuración del repositorio:
   - Ve a Settings > Pages
   - Selecciona la rama main como source
   - Guarda los cambios

Tu sitio estará disponible en: https://tu-usuario.github.io/portfolio-arquitectura

## Contribuir

Si encuentras algún error o tienes sugerencias de mejora, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.