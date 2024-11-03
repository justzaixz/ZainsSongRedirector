function generateLink() {
    console.log("take to song button clicked")
    let streamingWebsite = document.getElementById("streamingWebsites").value;
    let songName = document.getElementById("songNameInput").value;
    let artistName = document.getElementById("artistNameInput").value;
    var byvar = "%20by%20"
        // Remove spaces from the artistInput
        artistName = artistName.replace(/\s/g, '%20');
        // Remove spaces from the songInput
        songName = songName.replace(/\s/g, '%20');
    
    if (streamingWebsite === "Please Select a Streaming Website") {
        console.log('User Did not select anything (STREAMINGWEBSITE )');
        alert("Please Select A Streaming Website.");
    } else {
        console.log('User Selected a Streaming Website')
        if (streamingWebsite === "https://play.anghami.com/search/") {
            console.log('User Selected Anghami')
            if (songName === null || songName === "") { // Check if songName is null or empty
                let baseUrl = "https://play.anghami.com/search/";
                let fullUrl = baseUrl + artistName;
                console.log(fullUrl);
                window.location.href = fullUrl;
            } else {
                    if (artistName === null || artistName === "") { // Check if artistName is null or empty
                    let baseUrl = "https://play.anghami.com/search/";
                    let fullUrl = baseUrl + songName;
                    window.location.href = fullUrl;
                    console.log(fullUrl);
                    } else {
                            let baseUrl = "https://play.anghami.com/search/";
                            let fullUrl = baseUrl + songName + byvar + artistName;
                            console.log(fullUrl);
                            window.location.href = fullUrl;
}
}

        
        } else {
            if (songName === null || songName === "") { // Check if songName is null or empty
            let baseUrl = "https://open.spotify.com/search/";
            let fullUrl = baseUrl + artistName;
            console.log(fullUrl);
            window.location.href = fullUrl;
            } else {
                    if (artistName === null || artistName === "") { // Check if artistName is null or empty
                    let baseUrl = "https://open.spotify.com/search/";
                    let fullUrl = baseUrl + songName;
                    window.location.href = fullUrl;
                    console.log(fullUrl);
                }   else {
                    let baseUrl = "https://open.spotify.com/search/";
                    let fullUrl = baseUrl + songName + byvar + artistName;
                    console.log(fullUrl);
                    window.location.href = fullUrl;
}
}

        }
    }
}

function gotolikes() {
    console.log("Go to likes button clicked");
    const streamingWebsite = document.getElementById("streamingWebsites").value;
    
    if (streamingWebsite === "Please Select a Streaming Website") {
        console.log('User did not select a streaming website');
        alert("Please Select A Streaming Website.");
    } else if (streamingWebsite === "https://play.anghami.com/search/") {
        console.log('User selected Anghami for Likes');
        const anghamiLikesUrl = "https://play.anghami.com/likes";
        window.location.href = anghamiLikesUrl;
        console.log(anghamiLikesUrl);
    } else if (streamingWebsite === "https://open.spotify.com/search/") {
        console.log('User selected Spotify for Likes');
        const spotifyLikesUrl = "https://open.spotify.com/collection/tracks";
        window.location.href = spotifyLikesUrl;
        console.log(spotifyLikesUrl);
    } else {
        console.log("No valid streaming service selected.");
    }
}



document.getElementById("songNameInput").addEventListener("click", function() {
    setTimeout(function() {
        this.style.borderBottomColor = "rgb(204, 73, 255)";
    }, 300);
});
