// Datos de ejemplo para los proyectos
const projects = [
    {
        id: 'proyecto1',
        title: 'CASA MODERNA',
        description: 'DISEÑO CONTEMPORÁNEO CON ÉNFASIS EN LA SOSTENIBILIDAD Y LA LUZ NATURAL.',
        location: 'CIUDAD, PAÍS',
        year: '2023',
        area: '250M²',
        images: ['img/1_c.jpg', 'img/1_bn.jpg']
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
document.querySelector('.close-modal').addEventListener('click', () => {
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

// Carrusel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    let currentIndex = 0;
    let isTransitioning = false;
    const slideCount = slides.length;
    const transitionDuration = 800; // debe coincidir con la duración en CSS
    
    // Función para inicializar el carrusel
    const initializeCarousel = () => {
        slides[0].classList.add('active');
        slides[1].classList.add('next');
        slides[slideCount - 1].classList.add('prev');
    };
    
    // Función para mover al siguiente slide
    const moveToSlide = (direction) => {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const currentSlide = slides[currentIndex];
        let nextIndex = direction === 'next' 
            ? (currentIndex + 1) % slideCount 
            : (currentIndex - 1 + slideCount) % slideCount;
        
        // Remover clases anteriores
        slides.forEach(slide => {
            slide.classList.remove('prev', 'next');
        });
        
        // Preparar siguiente slide
        if (direction === 'next') {
            slides[nextIndex].classList.add('next');
        } else {
            slides[nextIndex].classList.add('prev');
        }
        
        // Forzar un reflow para asegurar que las transiciones funcionen
        void currentSlide.offsetWidth;
        
        // Activar transición
        currentSlide.classList.remove('active');
        slides[nextIndex].classList.add('active');
        slides[nextIndex].classList.remove(direction === 'next' ? 'next' : 'prev');
        
        // Actualizar índice actual
        currentIndex = nextIndex;
        
        // Preparar siguiente slide para la próxima transición
        setTimeout(() => {
            const nextNextIndex = direction === 'next'
                ? (currentIndex + 1) % slideCount
                : (currentIndex - 1 + slideCount) % slideCount;
            
            slides.forEach((slide, index) => {
                if (index === nextNextIndex) {
                    slide.classList.add(direction === 'next' ? 'next' : 'prev');
                }
            });
            
            isTransitioning = false;
        }, transitionDuration);
    };
    
    // Inicializar carrusel
    initializeCarousel();
    
    // Click en botón siguiente
    nextButton.addEventListener('click', () => moveToSlide('next'));
    
    // Click en botón anterior
    prevButton.addEventListener('click', () => moveToSlide('prev'));
    
    // Autoplay
    const startAutoplay = () => {
        return setInterval(() => {
            moveToSlide('next');
        }, 4000); // Cambiar cada 4 segundos
    };
    
    let autoplayInterval = startAutoplay();
    
    // Pausar autoplay al hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // Reanudar autoplay al quitar el hover
    track.addEventListener('mouseleave', () => {
        autoplayInterval = startAutoplay();
    });
    
    // Manejar visibilidad de la página
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(autoplayInterval);
        } else {
            autoplayInterval = startAutoplay();
        }
    });
}); 