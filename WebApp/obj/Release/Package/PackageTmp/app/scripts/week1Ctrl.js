/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var Week1Ctrl = (function () {
        function Week1Ctrl($scope) {
            this.$scope = $scope;
            //console.log("loaded");
        }
        return Week1Ctrl;
    }());
    Application.Week1Ctrl = Week1Ctrl;
    Week1Ctrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('week1Ctrl', Week1Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week1Ctrl.js.map