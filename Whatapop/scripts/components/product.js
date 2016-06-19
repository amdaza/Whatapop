
var ctrl = function (productsService, usersService, $sce) {
    // Save component reference
    var self = this;
    var productImage;

    self.$routerOnActivate = function(next) {

        // Get Product Data
        var productId = next.params.id;

        productsService.getProduct(productId)
            .then( function (response) {
                // General data
                self.productData = response.data;

                // Description (comes as HTML)
                self.productDescription = $sce.trustAsHtml(
                    response.data.description);
            });

    };

    self.$onInit = function () {
        self.favouriteProducts = productsService.getFavouriteProducts();
    };

    // Get image absolute path
    self.getImagePath = productsService.getImageAbsolutePath;

    // Manage favourite products
    self.toggleFavourite = productsService.toggleFavourite;

};


ctrl.$inject = ["productsService", "usersService", "$sce"];

angular
    .module("whatapop")
    .component("product", {
        templateUrl: "views/product.html",
        // 'bindings' Establish component communication interface
        bindings: {
            // get $router automatically from ng-outlet. It has to be that name
            $router: "<" // unidirectional binding, cannot be @ nor &
        },
        controller: ctrl // Component logic
    });