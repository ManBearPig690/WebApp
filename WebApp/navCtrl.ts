/// <reference path="app/typings/angularjs/angular.d.ts" />
/// <reference path="app/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="app/typings/angularjs/angular-animate.d.ts" />

module Application {
    export class NavCtrl {        
        constructor(private $scope: ng.IScope, private $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.$modal = $modal;
        }
        currentId = 0;
        sequence = [
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
        public navClick(id: number): void {
            this.sequence[this.currentId].Class = "";
            this.sequence[id].Class = "active";
            this.currentId = id;
            console.log(this.currentId);
            return;
        }

        public openModal(): void {
            var modalInstance: ng.ui.bootstrap.IModalServiceInstance = this.$modal.open({
                templateUrl: 'app/views/templates/modals/about.html',
                controller: 'aboutModalCtrl',
                controllerAs: 'about'
            });

            
        }
    }

    NavCtrl.$inject = ['$scope', '$uibModal'];
    // declaure class/type before it gets registered.
    App.app.controller('navCtrl', NavCtrl);

    export class AboutModalCtrl {
        static $inject = ['$uibModalInstance'];
        constructor(private $scope: ng.IScope, public $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
        }       
    }

    App.app.controller('aboutModalCtrl', AboutModalCtrl);
} 