
angular
    .module("whatapop")
    .service("categoriesService", function($http, Properties) {
        // All functionality that you want to export has to be published here

        this.getCategories = function() {
            return $http.get(Properties.serverUrl + Properties.endpointCategories);
        };

        this.getCategory = function(categoryId) {
            return $http.get(Properties.serverUrl + Properties.endpointCategories + "/" + categoryId);
        };

        this.getImageAbsolutePath = function (relativePath) {
            return (relativePath)
                ? (Properties.serverUrl + "/" + relativePath)
                : undefined;
        };

    });
