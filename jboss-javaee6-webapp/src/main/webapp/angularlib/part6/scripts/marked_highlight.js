angular.module('myApp', ['hc.marked'])
  .config(['markedProvider', function(markedProvider) {
     markedProvider.setOptions({
       highlight: function (code) {
         return hljs.highlightAuto(code).value;
       }
     });
  }])
  .controller('MyController', ['$scope', function($scope) {
  }]);

