
var ctrl = function ($rootRouter/*productsService*/) {
    var self = this;

    self.redirectProducts = function (productParams) {
        $rootRouter.navigate(["Products", productParams]);
    };
};

ctrl.$inject = ["$rootRouter"];
//ctrl.$inject = ["productsService"];

angular
    .module("whatapop")
    .component("wtpHeader", {
        bindings: {
            //$router: "<"
        },
        templateUrl: "views/wtp-header.html",
        controller: ctrl
    });