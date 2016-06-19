
var ctrl = function (productsService, $location, $filter) {
    // this references context, this context is the one we need, so we save it on self var
    var self = this;
    var urlParams = $location.search();

    productsService.getProducts() // Returns a promise
        .then(function (response) {
            var products = shuffleArray(response.data);
            var customFilter = {};

            if (urlParams.search &&
                urlParams.search.length >0 ){

                customFilter.name = urlParams.search;
            }

            products = $filter('filter')(products, customFilter );

            console.log(products.length);

            self.products = products;


        });

    // Get image absolute path
    self.getImagePath = productsService.getImageAbsolutePath;

};

ctrl.$inject = ["productsService", "$location", "$filter"];

angular
    .module("whatapop")
    .component("products", {
        // component view
        templateUrl: "views/products.html",

        controller: ctrl // Component logic
    });
