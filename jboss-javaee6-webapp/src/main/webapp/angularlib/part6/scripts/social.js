angular.module('myApp', ['djds4rce.angular-socialshare'])
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
  }])
  .run(['$FB', function($FB){
    $FB.init('xxxxxxxxxxxxxxx');
  }])
  .controller('MyController', ['$scope', function($scope) {
    $scope.title = 'WINGSプロジェクト'
    $scope.logo = 'http://www.wings.msn.to/image/wings.jpg'
    $scope.url = 'http://www.wings.msn.to/'
    $scope.summary = 'WINGSプロジェクトが執筆した書籍／Web記事などのサポートサイト'
  }]);
