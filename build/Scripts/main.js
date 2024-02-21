document.addEventListener('DOMContentLoaded', function(){
    startApp();
});

function startApp() {
    createGallery();
}

function createGallery() {
    const gallery = document.querySelector('.image-gallery');

    for(let i = 1; i <= 6; i++ ) {
        const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="build/Assets/Images/${i}.jpg" type="image/jpg">
            <source srcset="build/Assets/Images/${i}.webp" type="image/webp">
            <source srcset="build/Assets/Images/${i}.avif" type="image/avif">
            <img loading="lazy" width="200" height="300" src="build/Assets/Images/${i}.jpg" alt="Film image">
        `;
        image.onclick = function() {
            showImage(i);
        }

        gallery.appendChild(image);
    }
}  

function showImage(id) {
    const image = document.createElement('picture');
    image.innerHTML = `
    <source srcset="build/Assets/Images/BigImages/${id}.jpg" type="image/jpg">
    <source srcset="build/Assets/Images/BigImages/${id}.webp" type="image/webp">
    <source srcset="build/Assets/Images/BigImages/${id}.avif" type="image/avif">
    <img loading="lazy" width="200" height="300" src="build/Assets/Images/BigImages/${id}.jpg" alt="Film image">
`;

const overlay = document.createElement('div')
overlay.appendChild(image);
overlay.classList.add('overlay');
overlay.onclick = function() {
    const body = document.querySelector('body');
    body.classList.remove('fixed-body');
    overlay.remove();
}

}

