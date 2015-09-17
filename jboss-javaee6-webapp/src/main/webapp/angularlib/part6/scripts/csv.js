angular.module('myApp', ['ngSanitize', 'ngCsv'])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $scope.headers = [ 'ISBNコード', '書名', '価格', '出版社', '刊行日' ];

    $scope.getInfo = function() {
       return $http.get('books.json')
         .then(function(response) {
           return response.data;
         });
    };
  }]);