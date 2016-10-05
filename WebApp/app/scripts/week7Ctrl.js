/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var Week7Ctrl = (function () {
        function Week7Ctrl($scope) {
            this.$scope = $scope;
            //console.log("loaded");
        }
        return Week7Ctrl;
    }());
    Application.Week7Ctrl = Week7Ctrl;
    Application.Week1Ctrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('week7Ctrl', Week7Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week7Ctrl.js.map