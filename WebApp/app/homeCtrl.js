/// <reference path="typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    //import HomeCtrl = Application.App;
    var HomeCtrl = (function () {
        function HomeCtrl($scope) {
            this.$scope = $scope;
        }
        return HomeCtrl;
    }());
    Application.HomeCtrl = HomeCtrl;
    HomeCtrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('homeCtrl', HomeCtrl);
})(Application || (Application = {}));
//# sourceMappingURL=homeCtrl.js.map