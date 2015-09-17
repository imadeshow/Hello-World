angular.module('myApp', ['angular-loading-bar'])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    //cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.includeSpinner = false;
    //cfpLoadingBarProvider.includeBar = false;
  }])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $http.get('loading.php')
      .then(function(response){
        $scope.msg = response.data;
      });
  }]);
