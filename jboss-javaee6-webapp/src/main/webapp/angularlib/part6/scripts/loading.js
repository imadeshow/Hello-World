angular.module('myApp', ['angular-loading-bar'])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $http.get('loading.php')
    //$http.get('loading.php', { ignoreLoadingBar: true })
      .then(function(response){
        $scope.msg = response.data;
      });
  }]);