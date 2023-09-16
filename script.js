// Unsplash API
const count = 10;
const apiKey= '20zk20Ujhoz9IZn0uoNm7cm3eefX1wDBbrBw6NxDG7Q';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API

async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

    } catch(error){
// Catch error here 
    }
}

// On Load

getPhotos();