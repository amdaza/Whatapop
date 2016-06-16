
angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products"
        },
        /*{
            name: "NewRecipe",
            path: "/new-recipe",
            component: "newRecipe"
        }*/],
        templateUrl: "views/root.html"
    });