window.onload = function () {
    const gallery = document.getElementById('gallery');

    // Cambia la ruta del directorio según tu estructura de archivos
    const directoryPath = '/images';

    fetchImages(directoryPath);
};

function fetchImages(directoryPath) {
    fetch(directoryPath)
        .then((response) => response.text())
        .then((text) => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(text, 'text/html');
            const imageLinks = Array.from(htmlDocument.querySelectorAll('a'))
                .map((a) => a.href)
                .filter((href) => /\.(png|jpe?g|gif)$/i.test(href));
            displayImages(imageLinks);
        })
        .catch((error) => console.error('Error fetching images:', error));
}

function displayImages(imageLinks) {
    const gallery = document.getElementById('gallery');

    imageLinks.forEach((link) => {
        const img = document.createElement('img');
        img.src = link;
        gallery.appendChild(img);
    });
}
