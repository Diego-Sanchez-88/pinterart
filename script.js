var images = [
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/cedric-dhaenens-nd4vs7NGXIY-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/florian-olivo-pjyovKCKhSA-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/javier-garcia-J3sivicMj8Y-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/paul-volkmer-1JbTrPMcJ0c-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/peter-herrmann-bhF8gu9DaU4-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/peter-herrmann-eMSlQw-u0ec-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/peter-herrmann-eZaEWy2rAIc-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/peter-herrmann-k9tjyC1D7BY-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/peter-herrmann-sVTloEO5bq4-unsplash.jpg',
    'C:/Users/enano/OneDrive/Escritorio/ciberseguridad/ThePower/practicas/pinterart/images/radek-kilijanek-tQ6ZYE3nUmM-unsplash.jpg'
];

var galleryContainer = document.getElementById('gallery');

images.forEach(function (imageSrc) {
    // var imgElement = document.createElement('img');
    // imgElement.src = imageSrc;
    // galleryContainer.appendChild(imgElement);

    var pictureElement = document.createElement('picture');

    var sourceWebp = document.createElement('source');
    sourceWebp.srcset = imageSrc.replace(/\.(jpeg|jpg|png)$/, '.jpg');
    sourceWebp.type = 'image/webp';

    var imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.loading = 'lazy';

    pictureElement.appendChild(sourceWebp);
    pictureElement.appendChild(imgElement);

    galleryContainer.appendChild(pictureElement);
});
