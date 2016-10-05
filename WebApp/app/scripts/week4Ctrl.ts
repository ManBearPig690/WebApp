/// <reference path="../typings/angularjs/angular.d.ts" />

module Application {
    //import HomeCtrl = Application.App;

    export class Week4Ctrl {
        constructor(private $scope: ng.IScope) {
            //console.log("loaded");
        }

    }

    Week1Ctrl.$inject = ['$scope'];

    // declaure class/type before it gets registered.
    App.app.controller('week4Ctrl', Week4Ctrl);
}  