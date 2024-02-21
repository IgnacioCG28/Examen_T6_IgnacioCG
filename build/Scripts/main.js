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
            <source srcset="Assets/Images/${i}.webp" type="image/webp">
            <source srcset="Assets/Images/${i}.avif" type="image/avif">
            <img loading="lazy" width="200" height="300" src="Assets/Images/${i}.jpg" alt="Film image">
        `;
        image.onclick = function() {
            showImage(i);
        }

        gallery.appendChild(image);
    }
}  

     

