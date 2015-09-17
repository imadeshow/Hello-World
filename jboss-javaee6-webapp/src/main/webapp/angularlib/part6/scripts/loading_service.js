angular.module('myApp', ['cfp.loadingBar'])
  .controller('MyController', ['$scope', '$timeout', 'cfpLoadingBar',
    function($scope, $timeout, cfpLoadingBar) {
     cfpLoadingBar.start();
     $timeout(function() {
       /* 任意の非同期処理 */
       cfpLoadingBar.complete();
     }, 3000)
  }]);