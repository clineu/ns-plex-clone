const Observable = require("tns-core-modules/data/observable").Observable
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray
const TVDBService = require("~/services/tvdb-service")

const service = TVDBService()

function MoviesViewModel() {
    var viewModel = new Observable()
    viewModel.popular = new ObservableArray([])
    viewModel.page = 0
    viewModel.nextPage = function() {
        viewModel.page += 1
        return viewModel.page
    }
    viewModel.reset = function() {
        viewModel.page = 0

        while (viewModel.popular.length > 0) {
            viewModel.popular.pop()
        }
    }
    viewModel.reset()

    viewModel.loadPopular = function() {
        console.log("CURRENT PAGE: " + viewModel.page)
        return service
                .fetchPopularMovies(viewModel.nextPage())
                .then(function(result) {
                    viewModel.popular.push(result.results)
                })
    }

    return viewModel
}
module.exports = MoviesViewModel