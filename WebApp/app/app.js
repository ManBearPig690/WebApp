/// <reference path="typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    var App = (function () {
        function App() {
        }
        App.app = angular.module('app', []);
        return App;
    }());
    Application.App = App;
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map