/// <reference path="app/typings/angularjs/angular.d.ts" />
/// <reference path="app/typings/angularjs/angular-route.d.ts" />
/// <reference path="app/typings/angularjs/angular-animate.d.ts" />
/// <reference path="app/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
var Application;
(function (Application) {
    var App = (function () {
        function App() {
        }
        App.app = angular.module('app', ["ngRoute", "ui.bootstrap"]);
        return App;
    }());
    Application.App = App;
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map