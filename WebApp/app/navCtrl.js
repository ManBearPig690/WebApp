/// <reference path="typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    var NavCtrl = (function () {
        function NavCtrl($scope) {
            this.$scope = $scope;
            this.sequence = [
                {
                    "Id": 0,
                    "Text": "Home",
                    "Link": "index.html",
                    "Class": "active"
                }, {
                    "Id": 1,
                    "Text": "Link 1",
                    "Link": "index.html",
                    "Class": ""
                }, {
                    "Id": 3,
                    "Text": "Link 2",
                    "Link": "index.html",
                    "Class": ""
                }
            ];
        }
        return NavCtrl;
    }());
    Application.NavCtrl = NavCtrl;
    NavCtrl.$inject = ['$scope'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('navCtrl', NavCtrl);
})(Application || (Application = {}));
//# sourceMappingURL=navCtrl.js.map