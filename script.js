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
    console.log(albums);
    const albumsRow = document.createElement("div")
    albumsRow.classList.add("row", "albumsRow");
    const searchTitle = document.createElement("h2")
    searchTitle.classList.add("searchTitle");
    searchTitle.style.color = "white";
    searchTitle.innerHTML = document.getElementById("searchField").value;
    const albumResults = document.createElement("div")
    albumResults.classList.add("col-10", "searchResults")
    const coversRow = document.createElement("div")
    coversRow.classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-lg-2", "row-cols-xl-4", "imgLinks", "py-3")
    albumsRow.appendChild(albumResults)
    document.getElementById("main").appendChild(albumsRow)
    albumResults.appendChild(searchTitle)
    albumResults.appendChild(coversRow)

    for (let i = 0; i < 4 && i < albums.data.length; i++) {
        const searchTitle = document.createElement("h5")
        searchTitle.style.color ="white"
        searchTitle.classList.add("searchTitle")
        searchTitle.innerHTML = albums.data[i].album.title;
        const albumDiv = document.createElement("div")
        albumDiv.classList.add("col-3")
        const albumCover = document.createElement("img")
        albumCover.src = albums.data[i].album.cover
        coversRow.appendChild(albumDiv) 
        albumDiv.appendChild(albumCover)
        albumDiv.appendChild(searchTitle)
}
}