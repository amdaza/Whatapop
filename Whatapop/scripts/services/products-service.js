
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

        // Maybe later
        /*
        // Save product
        this.saveProduct = function (product, image) {

            var promise;

            if (image) {
                // Image exists
                // Create 'FormData' (standard HTML5) with image
                var data = new FormData();
                data.append("image", image);

                // Configure request 'Content-Type' as undefined (so Angular.js will infer request type)
                var configuration = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };

                // Upload image to server
                promise = $http.post(
                    Properties.serverUrl + Properties.endpointImages,
                    data,
                    configuration
                )
                    .then(function (response) {
                        // Server returns json, with uploaded file relative path
                        var path = response.data.path;

                        // Establish img path before saving
                        product.imagePath = path;

                        return $http.post(Properties.serverUrl + Properties.endpointProducts, product);
                    });

            } else {
                // Image undefined
                promise = $http.post(Properties.serverUrl + Properties.endpointProducts, product);
            }
            return promise;
        };
        */
    });
