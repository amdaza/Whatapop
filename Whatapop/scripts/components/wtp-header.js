
var ctrl = function ($rootRouter, $location, categoriesService) {
    var self = this;

    self.$onInit = function () {
        categoriesService.getCategories() // Returns a promise
            .then(function (response) {
                // Random order
                self.categories = shuffleArray(response.data);
                var defaultCategory = {
                    "id": 0,
                    "name": "Cualquier categoría"
                };
                self.categories.unshift(defaultCategory);

                // Get default category from param
                var urlParams = $location.search();

                if (urlParams.cat){
                    categoriesService.getCategory(parseInt(urlParams.cat))
                        .then(function (category) {
                            self.newCategory = category.data;
                        });
                } else {
                    self.newCategory = defaultCategory;
                }

                // Get default radius from param
                if (urlParams.radius){
                    self.newRadius = urlParams.radius;
                }
            });
    };

    self.redirectProducts = function (searchText) {
        var urlParams = $location.search();

        if (searchText.length > 0) {
            urlParams.search = searchText;
            $rootRouter.navigate(["Products", urlParams]);
        } else {
            delete urlParams.search;
            $rootRouter.navigate(["Products", urlParams]);
        }
    };
    
    self.filterCategory = function () {
        var urlParams = $location.search();

        if (self.newCategory.id > 0){
            urlParams.cat = self.newCategory.id;
            $rootRouter.navigate(["Products", urlParams]);
        } else {
            delete urlParams.cat;
            $rootRouter.navigate(["Products", urlParams]);
        }
    };

    self.pressedRadiusKey = function (event) {
        // Get key pressed
        var key = event.which || event.keyCode;

        // Check intro and input has text
        if (key === 13){
            var urlParams = $location.search();

            if (parseFloat(self.newRadius) && self.newRadius > 0) {
                urlParams.radius = self.newRadius;
                $rootRouter.navigate(["Products", urlParams]);
            } else {
                delete urlParams.radius;
                $rootRouter.navigate(["Products", urlParams]);
            }

        }
    };
};

ctrl.$inject = ["$rootRouter", "$location", "categoriesService"];

angular
    .module("whatapop")
    .component("wtpHeader", {
        templateUrl: "views/wtp-header.html",
        controller: ctrl
    });