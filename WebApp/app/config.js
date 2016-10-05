/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
var Application;
(function (Application) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/home", {
                templateUrl: "/app/views/templates/home.html",
                controller: "homeCtrl"
            });
        }
        return Config;
    }());
    Application.Config = Config;
    Config.$inject = ['$routeProvider'];
    Application.App.app.config(Config);
})(Application || (Application = {}));
//# sourceMappingURL=Config.js.map