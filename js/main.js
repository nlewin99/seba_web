// Datos de ejemplo para los proyectos
const projects = [
    {
        id: 'proyecto1',
        title: 'Casa Moderna',
        description: 'Diseño contemporáneo con énfasis en la sostenibilidad y la luz natural.',
        location: 'Ciudad, País',
        year: '2023',
        area: '250m²',
        images: ['img/proyecto1/1.jpg', 'img/proyecto1/2.jpg', 'img/proyecto1/3.jpg']
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
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        asunto: document.getElementById('asunto').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando fetch para enviar a un servidor
    console.log('Datos del formulario:', formData);
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
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
    const slideCount = slides.length;
    
    // Mostrar el primer slide
    slides[0].classList.add('active');
    
    // Función para mover al siguiente slide
    const moveToSlide = (currentSlide, targetIndex) => {
        // Remover clase active del slide actual
        currentSlide.classList.remove('active');
        // Agregar clase active al nuevo slide
        slides[targetIndex].classList.add('active');
    };
    
    // Click en botón siguiente
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.active');
        let nextIndex = currentIndex + 1;
        
        if (nextIndex >= slideCount) {
            nextIndex = 0;
        }
        
        moveToSlide(currentSlide, nextIndex);
        currentIndex = nextIndex;
    });
    
    // Click en botón anterior
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.active');
        let prevIndex = currentIndex - 1;
        
        if (prevIndex < 0) {
            prevIndex = slideCount - 1;
        }
        
        moveToSlide(currentSlide, prevIndex);
        currentIndex = prevIndex;
    });
    
    // Autoplay
    let autoplayInterval = setInterval(() => {
        nextButton.click();
    }, 5000);
    
    // Pausar autoplay al hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    // Reanudar autoplay al quitar el hover
    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            nextButton.click();
        }, 5000);
    });
}); 