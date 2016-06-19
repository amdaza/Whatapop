
angular
    .module("whatapop")
    .directive("wtpProductsFilterForm", function () {
        return {
            // With restrict we indicate how to use the directive
            // A as attribute of an HTML element
            // E as HTML element
            restrict: "EA",
            // Directive view
            templateUrl: "views/wtp-products-filter-form.html",
            // Define communication interface between directive and parent scope (Controller / component)
            scope: {
                onSelectedCategory: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {

                // Set default values from url parameters
                var urlParams = getLocationParameters();
                // Search (product name) value
                scope.newSearch = urlParams.search || "";
                // Product category value
               // scope.

                // Create new default search
                scope.productParams = {
                    "search": ""
                };

                scope.pressedKey = function (event) {
                    // Get key pressed
                    var key = event.which || event.keyCode;

                    // Check intro and input has text
                    if (key === 13){

                        if(scope.newSearch){
                            // Filter products
                            scope.productParams.search = scope.newSearch;
                        }

                        scope.notifyFilter();

                        // reset input
                        scope.productParams = {};

                    }
                };

                scope.notifyFilter = function () {
                    // Notify to parent scope
                    scope.onSelectedCategory(
                        {
                            productParams: scope.productParams
                        }
                    );
                };
/*
                // Create new recipe object
                scope.recipe = {
                    name: "",
                    ingredients: []
                };
*/
                /*
                // Save button handler
                scope.notifySave = function () {
                    // Notify to parent scope
                    scope.onButtonClick(
                        {
                            recipe: scope.recipe
                        }
                    );
                };

                scope.addIngredient = function (ingredient) {
                    // Add ingredient from component to ingredients collection
                    scope.recipe.ingredients.push(ingredient);
                };

                scope.deleteIngredient = function (index) {
                    // Delete ingredient on index position
                    scope.recipe.ingredients.splice(index, 1); // splice(index, elements to delete from index)
                };

                scope.ableToSave = function () {
                    // Check if form has necessary data
                    return (scope.recipe.name &&
                    (scope.recipe.ingredients.length > 0));
                }*/
            }
        }
    });