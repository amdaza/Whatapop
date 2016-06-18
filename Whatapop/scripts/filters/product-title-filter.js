
angular
    .module("whatapop")
    .filter("productTitleFilter", function ($sce) {
        return function (fullTitle) {
            // Ensure ingredients is a string
            fullTitle = (typeof fullTitle === "string") ? fullTitle : "";
            // Get sring between []
            var matches = fullTitle.match(/\[(.*?)\]/);

            // Format if there is some value
            if (matches) {
                var platform = matches[1];
                var title = fullTitle.substring(0, matches.index);
                var html = `<span class="product-name-only">` +
                        title +
                    `</span>
                    <br>
                    <span class="product-platform">` +
                        platform +
                    `</span>`;
                return $sce.trustAsHtml(html);
            }

            return fullTitle;
        };
    });