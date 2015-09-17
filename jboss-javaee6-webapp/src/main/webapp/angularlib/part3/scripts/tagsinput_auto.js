angular.module('myApp', [ 'ngTagsInput' ])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $scope.myTags = [
      { text: 'JavaScript' },
      { text: 'AngularJS' },
      { text: 'jQuery' }
    ];

    $scope.getTags = function(query) {
      return $http.get('tagsinput_auto.php?term=' + query);
    };
  }]);
