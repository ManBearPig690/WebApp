/// <reference path="../typings/angularjs/angular.d.ts" />

module Application {
    //import HomeCtrl = Application.App;

    export class Week6Ctrl {
        constructor(private $scope: ng.IScope) {
            //console.log("loaded");
        }

    }

    Week1Ctrl.$inject = ['$scope'];

    // declaure class/type before it gets registered.
    App.app.controller('week6Ctrl', Week6Ctrl);
}  