
var ctrl = function ($rootRouter) {
    var self = this;

    self.redirectProducts = function (productParams) {
        $rootRouter.navigate(["Products", productParams]);
    };
};

ctrl.$inject = ["$rootRouter"];

angular
    .module("whatapop")
    .component("wtpHeader", {
        templateUrl: "views/wtp-header.html",
        controller: ctrl
    });