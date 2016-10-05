/// <reference path="app/typings/angularjs/angular.d.ts" />
/// <reference path="app/typings/angularjs/angular-route.d.ts" />

module Application {
    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
            $routeProvider.when("/", {                
                templateUrl: "app/views/templates/week1.html",
                controller: Week1Ctrl
            })
            .when("/Week2", {
                templateUrl: "app/views/templates/week2.html",
                controller: Week2Ctrl
            })
            .when("/Week3", {
                templateUrl: "app/views/templates/week3.html",
                controller: Week3Ctrl
            })
            .when("/Week4", {
                templateUrl: "app/views/templates/week4.html",
                controller: Week4Ctrl
            })
            .when("/Week5", {
                templateUrl: "app/views/templates/week5.html",
                controller: Week5Ctrl
            })
            .when("/Week6", {
                templateUrl: "app/views/templates/week6.html",
                controller: Week6Ctrl
            })
            .when("/Week7", {
                templateUrl: "app/views/templates/week7.html",
                controller: Week7Ctrl
            })
            .otherwise({
                redirectTo: "/"
            });
            $locationProvider.html5Mode(true);
        }
    }

    Config.$inject = ['$routeProvider', '$locationProvider'];
    App.app.config(Config);
}