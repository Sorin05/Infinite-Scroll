const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Helper Function to Set Attributes on DOM Elements

function setAttributes(element, atributtes) {
    for (const key in atributtes) {
        element.setAttribute(key, atributtes[key]);
    }
}

// Create Elements for links and photos add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>, then put both inside imageConntainer Element 
        item.appendChild(img)
        imageContainer.appendChild(item);


    });
}

// Unsplash API
const count = 10;
const apiKey= '20zk20Ujhoz9IZn0uoNm7cm3eefX1wDBbrBw6NxDG7Q';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API

async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();

    } catch(error){
// Catch error here 
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
    getPhotos();
    console.log('load more');

   }
});

// On Load

getPhotos();