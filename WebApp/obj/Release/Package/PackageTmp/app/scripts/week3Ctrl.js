/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var Week3Ctrl = (function () {
        function Week3Ctrl($scope) {
            this.$scope = $scope;
            //console.log("loaded");
        }
        return Week3Ctrl;
    }());
    Application.Week3Ctrl = Week3Ctrl;
    Application.Week1Ctrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('week3Ctrl', Week3Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week3Ctrl.js.map