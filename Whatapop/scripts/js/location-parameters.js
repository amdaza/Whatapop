
function getLocationParameters() {
    var searchString = window.location.search.substring(1);
    var result = [];
    var params = searchString.split("&");

    for (var i=0; i<params.length; i++) {
        var val = params[i].split("=");

        result[val[0]] = val[1];
    }
    return result;
}