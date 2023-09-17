

function search() {
    const artist = document.getElementById("searchField").value;
    console.log(artist);
    getMusic(artist)
}

function displayMusic(albums) {      

    console.log(albums)
    console.log(albums.data[0].album.title)
    

   
}

function getMusic(artist) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
        .then(response => response.json())
        .then(displayMusic)
        .catch(error => {
            console.log(error.message)
        })
}












