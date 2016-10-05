/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var Week4Ctrl = (function () {
        function Week4Ctrl($scope) {
            this.$scope = $scope;
            //console.log("loaded");
        }
        return Week4Ctrl;
    }());
    Application.Week4Ctrl = Week4Ctrl;
    Application.Week1Ctrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('week4Ctrl', Week4Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week4Ctrl.js.map