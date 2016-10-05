/// <reference path="app/typings/angularjs/angular.d.ts" />
/// <reference path="app/typings/angularjs/angular-route.d.ts" />
var Application;
(function (Application) {
    var Config = (function () {
        function Config($routeProvider, $locationProvider) {
            $routeProvider.when("/", {
                templateUrl: "app/views/templates/week1.html",
                controller: Application.Week1Ctrl
            })
                .when("/Week2", {
                templateUrl: "app/views/templates/week2.html",
                controller: Application.Week2Ctrl
            })
                .when("/Week3", {
                templateUrl: "app/views/templates/week3.html",
                controller: Application.Week3Ctrl
            })
                .when("/Week4", {
                templateUrl: "app/views/templates/week4.html",
                controller: Application.Week4Ctrl
            })
                .when("/Week5", {
                templateUrl: "app/views/templates/week5.html",
                controller: Application.Week5Ctrl
            })
                .when("/Week6", {
                templateUrl: "app/views/templates/week6.html",
                controller: Application.Week6Ctrl
            })
                .when("/Week7", {
                templateUrl: "app/views/templates/week7.html",
                controller: Application.Week7Ctrl
            })
                .otherwise({
                redirectTo: "/"
            });
            $locationProvider.html5Mode(true);
        }
        return Config;
    }());
    Application.Config = Config;
    Config.$inject = ['$routeProvider', '$locationProvider'];
    Application.App.app.config(Config);
})(Application || (Application = {}));
//# sourceMappingURL=config.js.map