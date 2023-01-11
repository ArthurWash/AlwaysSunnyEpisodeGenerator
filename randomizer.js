let episodes = []

// Fetch data from Tvmaze API and store episodes in array
fetch("https://api.tvmaze.com/shows/347/episodes").then(response => response.json()).then(jsonData => { episodes = jsonData })

document.getElementById("butt").onclick=function(){

    // Get a random episode
    const episode = episodes[Math.floor(Math.random() * episodes.length)];

    // Display data
    document.getElementById("season").value = episode.season;
    document.getElementById("episode").value = episode.number;
    document.getElementById("title").value = episode.name;
    document.getElementById("desc").value = episode.summary.replace(/(<([^>]+)>)/ig, '');
}