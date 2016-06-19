
var ctrl = function (productsService, usersService, $location, $filter, $haversine, $scope) {
    // this references context, this context is the one we need, so we save it on self var
    var self = this;

    self.$onInit = function () {
        // Get products
        productsService.getProducts() // Returns a promise
        .then(function (response) {
            // Random order
            var products = shuffleArray(response.data);
            // Get params to filter
            var urlParams = $location.search();
            var customFilter = {};

            // Product name filter
            if (urlParams.search &&
                urlParams.search.length > 0 ){

                customFilter.name = urlParams.search;
            }

            // Product category filter
            if (urlParams.cat &&
                urlParams.cat.length > 0 ){

                customFilter.category = {};
                customFilter.category.id = parseInt(urlParams.cat);
            }

            self.products = $filter('filter')(products, customFilter);

            // Product distance filter
            if (urlParams.radius &&
                parseFloat(urlParams.radius) &&
                urlParams.radius > 0 ) {

                var radius = urlParams.radius * 1000;

                var promises = [usersService.getPosition(), usersService.getUsers()];

                Promise.all(promises)
                    .then(function (responses) {
                        var coordinates = responses[0].coords;
                        var allUsers = responses[1].data;

                        var userPosition = {
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude
                        };

                        var closestUsers = allUsers
                            .reduce(function (selected, sellerData) {

                            if ($haversine.distance(
                                    userPosition, {
                                        latitude: sellerData.latitude,
                                        longitude: sellerData.longitude
                                    }) <= radius) {
                                selected.push(sellerData.id);
                            }
                            return selected;
                        }, []);

                        self.products = [];
                        self.products = $filter("filter")(products, function (product) {
                            return closestUsers.indexOf(product.seller.id) > -1;
                        });

                        // Notify change
                        $scope.$apply();

                    }).catch(function (error) {
                        console.error(error);
                    });
            }

        });

        self.favouriteProducts = productsService.getFavouriteProducts();

    };

    // Get image absolute path
    self.getImagePath = productsService.getImageAbsolutePath;

    // Manage favourite products
    self.toggleFavourite = productsService.toggleFavourite;

};

ctrl.$inject = ["productsService", "usersService", "$location", "$filter", "$haversine", "$scope"];

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
