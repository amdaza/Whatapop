
var ctrl = function (productsService, $location, $filter) {
    // this references context, this context is the one we need, so we save it on self var
    var self = this;

    self.$onInit = function () {
        productsService.getProducts() // Returns a promise
        .then(function (response) {
            // Random order
            var products = shuffleArray(response.data);
            // Get params to filter
            var urlParams = $location.search();
            var customFilter = {};

            if (urlParams.search &&
                urlParams.search.length > 0 ){

                customFilter.name = urlParams.search;
            }

            if (urlParams.cat &&
                urlParams.cat.length > 0 ){

                customFilter.category = {};
                customFilter.category.id = parseInt(urlParams.cat);
            }

            self.products = $filter('filter')(products, customFilter);
        });
    };

    // Get image absolute path
    self.getImagePath = productsService.getImageAbsolutePath;

};

ctrl.$inject = ["productsService", "$location", "$filter"];

angular
    .module("whatapop")
    .component("products", {
        // component view
        templateUrl: "views/products.html",

        // 'bindings' Establish component communication interface
        bindings: {
            // get $router automatically from ng-outlet. It has to be that name
            $router: "<" // unidirectional binding, cannot be @ nor &
        },
        controller: ctrl // Component logic
    });
