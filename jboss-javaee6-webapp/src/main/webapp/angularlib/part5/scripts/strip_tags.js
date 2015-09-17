angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.memo = '<div>サンプルは、<a href="http://www.wings.msn.to/">サポートサイト</a>からダウンロードできます。<img src="sample.jpg" /></div>';
  }]);