/// <reference path="app/typings/angularjs/angular.d.ts" />
/// <reference path="app/typings/angularjs/angular-route.d.ts" />
/// <reference path="app/typings/angularjs/angular-animate.d.ts" />
/// <reference path="app/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />

module Application {
    export class App {
        static app = angular.module('app', ["ngRoute", "ui.bootstrap"]);
    }
}