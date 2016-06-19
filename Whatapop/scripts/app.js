// Module setter

angular.module(
    "whatapop",
    [
        "ngComponentRouter",
        "dahr.ng-haversine"
    ]);

// Configure provider $locationProvider.
// Establish navigation model HTML5 for Single Page Application to work
angular.module("whatapop").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

// Indicate root component in '$routerRootComponent'
angular.module("whatapop").value("$routerRootComponent", "root");
