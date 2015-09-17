angular.module('myApp', ['ngClipboard'])
  .config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("../bower_components/zeroclipboard/dist/ZeroClipboard.swf");
  }])
  .controller('MyController', ['$scope', function($scope) {
  $scope.onfallback = function(copy) {
    alert('コピーできませんでした：' + copy);
  };
  }]);
