function search() {
    const artist = document.getElementById("searchField").value;
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`)
        .then(response => response.json())
        .then(displayMusic)
        .catch(error => {
            console.log(error.message)
        })
}

function displayMusic(albums) {
    const artist = document.getElementById("searchField").value;
    const mainSection =  document.getElementById("main");
    const albumsRow = document.createElement("div");
    const searchTitle = document.createElement("h2");

    albumsRow.classList.add("row", "albumsRow", "my-5");

    searchTitle.classList.add("searchTitle");
    searchTitle.style.color = "white";
    searchTitle.innerHTML = artist.toUpperCase();

    const albumResults = document.createElement("div")
    albumResults.classList.add("col-10", "searchResults");

    const coversRow = document.createElement("div");
    coversRow.classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-lg-2", "row-cols-xl-4", "imgLinks", "py-3");

    albumsRow.appendChild(albumResults);
    mainSection.appendChild(albumsRow);
    albumResults.appendChild(searchTitle);
    albumResults.appendChild(coversRow);

    for (let i = 0; i < 4 && i < albums.data.length; i++) {
        const albumTitle = document.createElement("h5")
        const albumDiv = document.createElement("div")
        const albumCover = document.createElement("img")

        albumTitle.style.color ="white"
        albumTitle.classList.add("albumTitle")
        albumTitle.innerHTML = albums.data[i].album.title;
        albumDiv.classList.add("col-3")
        albumCover.src = albums.data[i].album.cover_big;
        
        coversRow.appendChild(albumDiv) 
        albumDiv.appendChild(albumCover)
        albumDiv.appendChild(albumTitle)
}
}