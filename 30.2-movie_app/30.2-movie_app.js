const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    showMovie({
        poster: data.Poster,
        title: data.Title,
        genre: data.Genre,
        year: data.Year,
        plot: data.Plot,
        director: data.Director,
        actors: data.Actors,
        ratings: data.Ratings
    });
}

const showMovie = (movieObject) => {
    const containerElement = document.querySelector('.container');

    containerElement.innerHTML = `
        <img class="movie-poster" src="${movieObject.poster}" alt="movie-poster-img">
        <div class="movie-title">
            <label for="title">Title: </label>
            <span id="title">${movieObject.title}</span>
        </div>
        <div class="movie-genre">
            <label for="genre">Genre: </label>
            <span id="genre">${movieObject.genre}</span>
        </div>
        <div class="movie-year">
            <label for="year">Year: </label>
            <span id="year">${movieObject.year}</span>
        </div>
        <div class="movie-plot">
            <label for="plot">Plot: </label>
            <span id="plot">${movieObject.plot}</span>
        </div>
        <div class="movie-director">
            <label for="director">Director: </label>
            <span id="director">${movieObject.director}</span>
        </div>
        <div class="movie-actors">
            <label for="actors">Actors: </label>
            <span id="actors">${movieObject.actor}</span>
        </div>
        <ul class="movie-rating">
            
        </ul>
    `

    let str = '<h4>ratings:</h4>';
    movieObject.ratings.forEach((rating) => {
        console.log(rating.Source)
        str += `
            <li>
                <label>${rating.Source}: </label>
                <span>${rating.Value}</span>
            </li>
        `
    });

    document.querySelector('.movie-rating').innerHTML = str;
}



const apikey = 'a157295b';
const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`;

fetchMovie(url);