
angular
    .module("whatapop")
    .service("productsService", function($http, Properties) {
        // All functionality that you want to export has to be published here

        this.getProducts = function() {
            return $http.get(Properties.serverUrl + Properties.endpointProducts);
        };

        this.getProduct = function(productId) {
            return $http.get(Properties.serverUrl + Properties.endpointProducts + "/" + productId);
        };

        this.getImageAbsolutePath = function (relativePath) {
            return (relativePath)
                ? (Properties.serverUrl + "/" + relativePath)
                : undefined;
        };

        this.getFavouriteProducts = function () {
            var favouriteProducts = [];
            var jsonFavourites = localStorage.getItem("favouriteProducts");
            if (jsonFavourites) {
                favouriteProducts = JSON.parse(jsonFavourites);
            }
            return favouriteProducts;
        };

        this.toggleFavourite = function (productId, favouriteProducts) {

            var indexItem = favouriteProducts.indexOf(productId);

            if (indexItem === -1) {
                favouriteProducts.push(productId);
            } else {
                favouriteProducts.splice(indexItem, 1);
            }
            localStorage.setItem("favouriteProducts", JSON.stringify(favouriteProducts));
        };
        
    });
