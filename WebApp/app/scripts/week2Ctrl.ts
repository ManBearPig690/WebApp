/// <reference path="../typings/angularjs/angular.d.ts" />

module Application {
    "use strict";
    export class Week2Ctrl {
        static $inject = ['$scope'];
        public showCarosel: boolean;
        public buttonText = "show";
        
        constructor(private $scope: ng.IScope) {
            this.$scope = $scope;
            this.showCarosel = false;
            this.buttonText = "show";
        }   
    }

    // declaure class/type before it gets registered.
    App.app.controller('week2Ctrl', Week2Ctrl);
}  