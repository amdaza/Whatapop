
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
                //onSelectedCategory: "&" // Notify event to parent scope
            },
            // Establish directive logic or manipulate DOM in view
            link: function (scope) {
                // Create new default search
                var productParams = {
                    "search": ""
                };

                scope.pressedKey = function (event) {
                    // Get key pressed
                    var key = event.which || event.keyCode;
                    //console.log(key);
                    // Check intro and input has text
                    if (key === 13 &&
                        scope.newSearch){

                        // Filter products
                        productParams.search = scope.newSearch;

                        console.log(productParams);

                        // reset input
                        self.newSearch = "";
                    }
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