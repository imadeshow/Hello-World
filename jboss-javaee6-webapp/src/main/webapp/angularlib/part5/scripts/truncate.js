angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.memo = 'サンプルは、サポートサイト （http://www.wings.msn.to/） からダウンロードできます。';
  }]);
