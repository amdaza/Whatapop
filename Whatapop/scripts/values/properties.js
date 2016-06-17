
angular
    .module("whatapop")
    .constant("Properties", {
        serverUrl: "http://localhost:8000",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users",
        endpointCategories: "/api/categories"
    });