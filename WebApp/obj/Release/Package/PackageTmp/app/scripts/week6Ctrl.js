/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var Week6Ctrl = (function () {
        function Week6Ctrl($scope) {
            this.$scope = $scope;
            //console.log("loaded");
        }
        return Week6Ctrl;
    }());
    Application.Week6Ctrl = Week6Ctrl;
    Application.Week1Ctrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('week6Ctrl', Week6Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week6Ctrl.js.map