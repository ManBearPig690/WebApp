/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
var Application;
(function (Application) {
    var LabelEditor = LabelApplication.LabelEditor;
    var LabelCollection = (function () {
        function LabelCollection($scope) {
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
        return LabelCollection;
    }());
    Application.LabelCollection = LabelCollection;
    // declaure class/type before it gets registered.
    LabelEditor.editorModule.controller("labelCollection", ['$scope', LabelCollection]);
})(Application || (Application = {}));
//# sourceMappingURL=labelCollection.js.map