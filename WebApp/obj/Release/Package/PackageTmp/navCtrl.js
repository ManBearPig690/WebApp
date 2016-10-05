/// <reference path="app/typings/angularjs/angular.d.ts" />
/// <reference path="app/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="app/typings/angularjs/angular-animate.d.ts" />
var Application;
(function (Application) {
    var NavCtrl = (function () {
        function NavCtrl($scope, $modal) {
            this.$scope = $scope;
            this.$modal = $modal;
            this.currentId = 0;
            this.sequence = [
                {
                    "Id": 0,
                    "Text": "Week 1",
                    //"Link": "/~ad46400/COM319/",
                    "Link": "/",
                    "Class": "active",
                    "Title": "Com 319 Week 1"
                }, {
                    "Id": 1,
                    "Text": "Week 2",
                    "Link": "/Week2",
                    "Class": "",
                    "Title": "Com 319 Week 2"
                }, {
                    "Id": 2,
                    "Text": "Week 3",
                    "Link": "/Week3",
                    //"Link": "/~ad46400/COM319/Week3",
                    "Class": "",
                    "Title": "Com 319 Week 3"
                }, {
                    "Id": 3,
                    "Text": "Week 4",
                    "Link": "/Week4",
                    //"Link": "/~ad46400/COM319/Week4",
                    "Class": "",
                    "Title": "Com 319 Week 4"
                }, {
                    "Id": 4,
                    "Text": "Week 5",
                    "Link": "/Week5",
                    //"Link": "/~ad46400/COM319/Week5",
                    "Class": "",
                    "Title": "Com 319 Week 5"
                }, {
                    "Id": 5,
                    "Text": "Week 6",
                    "Link": "/Week6",
                    //"Link": "/~ad46400/COM319/Week6",
                    "Class": "",
                    "Title": "Com 319 Week 6"
                }, {
                    "Id": 6,
                    "Text": "Week 7",
                    "Link": "/Week7",
                    //"Link": "/~ad46400/COM319/Week7",
                    "Class": "",
                    "Title": "Com 319 Week 7"
                }
            ];
            this.$scope = $scope;
            this.$modal = $modal;
        }
        NavCtrl.prototype.navClick = function (id) {
            this.sequence[this.currentId].Class = "";
            this.sequence[id].Class = "active";
            this.currentId = id;
            console.log(this.currentId);
            return;
        };
        NavCtrl.prototype.openModal = function () {
            var modalInstance = this.$modal.open({
                templateUrl: 'app/views/templates/modals/about.html',
                controller: 'aboutModalCtrl',
                controllerAs: 'about'
            });
        };
        return NavCtrl;
    }());
    Application.NavCtrl = NavCtrl;
    NavCtrl.$inject = ['$scope', '$uibModal'];
    // declaure class/type before it gets registered.
    Application.App.app.controller('navCtrl', NavCtrl);
    var AboutModalCtrl = (function () {
        function AboutModalCtrl($scope, $modalInstance) {
            this.$scope = $scope;
            this.$modalInstance = $modalInstance;
        }
        AboutModalCtrl.$inject = ['$uibModalInstance'];
        return AboutModalCtrl;
    }());
    Application.AboutModalCtrl = AboutModalCtrl;
    Application.App.app.controller('aboutModalCtrl', AboutModalCtrl);
})(Application || (Application = {}));
//# sourceMappingURL=navCtrl.js.map