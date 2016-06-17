
angular
    .module("whatapop")
    .service("usersService", function($http, Properties) {
        // All functionality that you want to export has to be published here

        this.getUsers = function() {
            return $http.get(Properties.serverUrl + Properties.endpointUsers);
        };

        this.getUser = function(userId) {
            return $http.get(Properties.serverUrl + Properties.endpointUsers + "/" + userId);
        };

        this.getImageAbsolutePath = function (relativePath) {
            return (relativePath)
                ? (Properties.serverUrl + "/" + relativePath)
                : undefined;
        };

    });
