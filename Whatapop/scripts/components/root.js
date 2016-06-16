
angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        }
        /*{
            name: "NewRecipe",
            path: "/new-recipe",
            component: "newRecipe"
        }*/],
        templateUrl: "views/root.html"
    });
