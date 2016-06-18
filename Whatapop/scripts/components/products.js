
var ctrl = function (productsService) {
    // this references context, this context is the one we need, so we save it on self var
    var self = this;

    productsService.getProducts() // Returns a promise
        .then(function (response) {

            // In 'data' property it's its body
            self.products = shuffleArray(response.data);
        });

    // Get image absolute path
    self.getImagePath = productsService.getImageAbsolutePath;

};

ctrl.$inject = ["productsService"];

angular
    .module("whatapop")
    .component("products", {
        // component view
        templateUrl: "views/products.html",

        controller: ctrl // Component logic
    });
