// Datos de ejemplo para los proyectos
const projects = [
    {
        id: 'proyecto1',
        title: 'CASA TUMAN',
        description: 'CASA DE PLAYA EN TUMAN, CHILE.',
        location: 'CIUDAD, PAÍS',
        year: '2023',
        area: '250M²',
        images: ['img/1_c.jpg', 'img/1_bn.jpg']
    },
    {
        id: 'proyecto2',
        title: 'CASA LA POLCURA',
        description: 'CASA DE PLAYA EN LA POLCURA, CHILE.',
        location: 'CIUDAD, PAÍS',
        year: '2024',
        area: '250M²',
        images: ['img/2_c.jpg', 'img/2_bn.jpg']
    }
    // Agregar más proyectos aquí
];

// Manejo del modal
function openProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalProjectTitle');
    const description = document.getElementById('modalProjectDescription');
    const location = document.getElementById('modalProjectLocation');
    const year = document.getElementById('modalProjectYear');
    const area = document.getElementById('modalProjectArea');
    const gallery = document.querySelector('.project-gallery');

    title.textContent = project.title;
    description.textContent = project.description;
    location.textContent = project.location;
    year.textContent = project.year;
    area.textContent = project.area;

    // Limpiar y cargar la galería
    gallery.innerHTML = '';
    project.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = project.title;
        gallery.appendChild(img);
    });

    modal.style.display = 'block';
}

// Cerrar modal
document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
});

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Manejo del formulario de contacto
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value.toUpperCase(),
        email: document.getElementById('email').value,
        asunto: document.getElementById('asunto').value.toUpperCase(),
        mensaje: document.getElementById('mensaje').value.toUpperCase()
    };

    console.log('DATOS DEL FORMULARIO:', formData);
    
    // Mostrar mensaje de éxito
    alert('¡GRACIAS POR TU MENSAJE! TE CONTACTAREMOS PRONTO.');
    
    // Limpiar el formulario
    document.getElementById('contactForm').reset();
    
    return false;
}

// Animación suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Manejo del fondo dinámico
function initBackgroundSlideshow() {
    const slides = document.querySelectorAll('.background-slideshow .slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Cambiar slide cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Inicializar el slideshow cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initBackgroundSlideshow); 