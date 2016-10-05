/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var Week5Ctrl = (function () {
        function Week5Ctrl($scope) {
            this.$scope = $scope;
            //console.log("loaded");
        }
        return Week5Ctrl;
    }());
    Application.Week5Ctrl = Week5Ctrl;
    Application.Week1Ctrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('week5Ctrl', Week5Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week5Ctrl.js.map