
angular
    .module("whatapop")
    .service("usersService", function($http, Properties, $q) {
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
        
        this.getPosition = function () { // Returns a promise
            var defered = $q.defer();
            navigator.geolocation.getCurrentPosition(
                function (data) {
                    defered.resolve({ coords: data.coords});
                }
            );
            return defered.promise;
        };

    });
