
var ctrl = function ($rootRouter, categoriesService, $location) {
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
    }
};

ctrl.$inject = ["$rootRouter", "categoriesService", "$location"];

angular
    .module("whatapop")
    .component("wtpHeader", {
        templateUrl: "views/wtp-header.html",
        controller: ctrl
    });