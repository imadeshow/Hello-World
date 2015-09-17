angular.module('myApp', ['hljs'])
  .config(['hljsServiceProvider', function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  }])
  .controller('MyController', ['$scope', function($scope) {
  }]);
