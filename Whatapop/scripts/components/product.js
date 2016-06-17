
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

        // Get User Data

    };

    // Get image absolute path
    self.getImagePath = productsService.getImageAbsolutePath;


    /*
     // Save product
     self.saveRecipe = function (product) {

     productsService.saveRecipe(product, productImage)
     .then(function (response) {
     // Old way without components
     //$scope.products.push(response.data);

     // Like ngLink
     // $router has data related with actual route
     // uses navigate to redirect
     self.$router.navigate(['MyRecipes']);
     });
     };

     self.selectImage = function (imgFile) {
     productImage = imgFile;
     };

     self.deselectImage = function () {
     productImage = undefined;
     }*/
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