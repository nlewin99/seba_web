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

// Datos de los proyectos
const projectsData = {
    '1': {
        title: 'CASA TUMAN',
        location: 'TUMAN, CHILE',
        year: '2023',
        area: '250 m²',
        description: 'Casa de playa diseñada para aprovechar al máximo las vistas al océano y la luz natural. Construida con materiales locales y diseñada para integrarse con el entorno natural.',
        images: [
            'img/1_c.jpg',
            'img/1_bn.jpg'
            // Añadir más imágenes del proyecto aquí
        ]
    },
    '2': {
        title: 'CASA LA POLCURA',
        location: 'LA POLCURA, CHILE',
        year: '2022',
        area: '180 m²',
        description: 'Residencia contemporánea que combina elementos modernos con materiales tradicionales. Diseñada para maximizar la eficiencia energética y el confort.',
        images: [
            'img/2_c.jpg',
            'img/2_bn.jpg'
            // Añadir más imágenes del proyecto aquí
        ]
    }
};

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

// Función para abrir la vista detalle
function openProjectDetail(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Actualizar la información del proyecto
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectLocation').textContent = project.location;
    document.getElementById('projectDetailLocation').textContent = project.location;
    document.getElementById('projectYear').textContent = project.year;
    document.getElementById('projectArea').textContent = project.area;
    document.getElementById('projectDescription').textContent = project.description;

    // Establecer la imagen principal
    document.getElementById('mainProjectImage').src = project.images[0];

    // Generar las miniaturas
    const thumbnailsContainer = document.getElementById('projectThumbnails');
    thumbnailsContainer.innerHTML = '';
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `project-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => changeMainImage(image, thumbnail);
        thumbnail.innerHTML = `<img src="${image}" alt="Miniatura ${index + 1}">`;
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Mostrar el modal
    const modal = document.getElementById('projectDetailModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

// Función para cambiar la imagen principal
function changeMainImage(imageSrc, thumbnailElement) {
    document.getElementById('mainProjectImage').src = imageSrc;
    
    // Actualizar la clase active en las miniaturas
    const thumbnails = document.querySelectorAll('.project-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

// Función para cerrar la vista detalle
function closeProjectDetail() {
    const modal = document.getElementById('projectDetailModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restaurar scroll
}

// Cerrar el modal al hacer clic fuera del contenido
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectDetailModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectDetail();
        }
    });
}); 