
var ctrl = function (usersService) {
    var self = this;
console.log(self);
    self.getImagePath = usersService.getImageAbsolutePath;
};

ctrl.$inject = ["usersService"];

angular
    .module("whatapop")
    .component("simpleUser", {
        bindings: {
            $router: "<",
            userbasicdata: "<"
        },
        templateUrl: "views/simple-user.html",
        controller: ctrl
    });
