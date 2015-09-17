angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', '$sce', function($scope, $sce) {
    $scope.chara = $sce.trustAsHtml('<img src="http://www.web-deli.com/image/home_chara.gif" style="width:100px" />');
  }]);
