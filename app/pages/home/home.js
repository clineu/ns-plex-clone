//const isiOS = require("tns-core-modules/platform")
const MoviesViewModel = require("./home-view-model")

var moviesViewModel = MoviesViewModel()

function onLoaded(args) {
    const page = args.object
    page.bindingContext = moviesViewModel

    loadPopularItems()
}
exports.onLoaded = onLoaded

function onNavigatedTo(args) {

}
exports.onNavigatedTo = onNavigatedTo

function onLoadMoreItemsRequested(args) {
    
    loadPopularItems()
        .then(function() {
            args.object.notifyLoadOnDemandFinished()
            args.returnValue = true
        })
        .catch(function() {
            args.object.notifyLoadOnDemandFinished(true)
            args.returnValue = false
        })
}
exports.onLoadMoreItemsRequested = onLoadMoreItemsRequested

function loadPopularItems() {
    return moviesViewModel.loadPopular()
}