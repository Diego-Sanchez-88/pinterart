var images = [
    'images/cedric-dhaenens-nd4vs7NGXIY-unsplash.jpg',
    'images/florian-olivo-pjyovKCKhSA-unsplash.jpg',
    'images/javier-garcia-J3sivicMj8Y-unsplash.jpg',
    'images/paul-volkmer-1JbTrPMcJ0c-unsplash.jpg',
    'images/peter-herrmann-bhF8gu9DaU4-unsplash.jpg',
    'images/peter-herrmann-eMSlQw-u0ec-unsplash.jpg',
    'images/peter-herrmann-eZaEWy2rAIc-unsplash.jpg',
    'images/peter-herrmann-k9tjyC1D7BY-unsplash.jpg',
    'images/peter-herrmann-sVTloEO5bq4-unsplash.jpg',
    'images/radek-kilijanek-tQ6ZYE3nUmM-unsplash.jpg'
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
