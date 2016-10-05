/// <reference path="../typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    "use strict";
    var Week2Ctrl = (function () {
        function Week2Ctrl($scope) {
            this.$scope = $scope;
            this.buttonText = "show";
            this.$scope = $scope;
            this.showCarosel = false;
            this.buttonText = "show";
        }
        Week2Ctrl.$inject = ['$scope'];
        return Week2Ctrl;
    }());
    Application.Week2Ctrl = Week2Ctrl;
    // declaure class/type before it gets registered.
    Application.App.app.controller('week2Ctrl', Week2Ctrl);
})(Application || (Application = {}));
//# sourceMappingURL=week2Ctrl.js.map