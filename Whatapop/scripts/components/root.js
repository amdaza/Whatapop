
angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        },
        {
            name: "Product",
            path: "/products/:id",
            component: "product"
        }],
        templateUrl: "views/root.html"
    });
