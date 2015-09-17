angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $scope.getList = function(value) {
      return $http.get('typeahead_server.php', {
        params: {
          term: value
        }
      }).then(function(response){
        return response.data;
      });
    };
  }]);