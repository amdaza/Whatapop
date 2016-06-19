
angular
    .module("whatapop")
    .directive("wtpProductsFilterSearch", function () {
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // Directive view
            templateUrl: "views/wtp-products-filter-search.html",
            // Define communication interface between directive and parent scope (Controller / component)
            scope: {
                categories: "<",
                onSelectedCategory: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {

                // Set default values from url parameters
                var urlParams = getLocationParameters();
                
                // Search (product name) value
                scope.newSearch = urlParams.search || "";
                
                // Product category value
                scope.newCategory = urlParams.cat || {
                        "id": 0,
                        "name": "Cualquier categoría"
                    };

                // Create new default search
                scope.searchText = "";

                scope.pressedKey = function (event) {
                    // Get key pressed
                    var key = event.which || event.keyCode;

                    // Check intro and input has text
                    if (key === 13){

                        if(scope.newSearch){
                            // Filter products
                            scope.searchText = scope.newSearch;
                        }

                        scope.notifyFilter();

                        // reset input
                        scope.searchText = {};

                    }
                };

                scope.notifyFilter = function () {
                    // Notify to parent scope
                    scope.onSelectedCategory(
                        {
                            searchText: scope.searchText
                        }
                    );
                };

            }
        }
    });