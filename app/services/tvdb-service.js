var fetchModule = require("tns-core-modules/fetch");

function TVDBService() {
    const service = new Object()
    
    service.fetchPopularMovies = function(page) {
        const popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?api_key=d85770667e703553ab64695956ca96ea&language=en-US&page="+page

        return fetchModule.fetch(popularMoviesURL, {
            method: "GET",
            headers: { "Content-Type": "application/json"}
        })
        .then(function(res) {
            return res.json()
        })
    }

    return service
}
module.exports = TVDBService