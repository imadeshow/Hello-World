angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', '$filter', function($scope, $filter) {
    $scope.min = new Date();

    $scope.events = [
      {
        day: new Date(2015, 7, 5),
        title: '誕生日',
        clazz: 'birth'
      },
      {
        day: new Date(2015, 7, 13),
        title: '休業',
        clazz: 'holiday'
      },
      {
        day: new Date(2015, 7, 14),
        title: '休業',
        clazz: 'holiday'
      }
    ];

    $scope.getStyle = function(date, mode) {
      if (mode === 'day') {
        var current = new Date(date);
        for (var i = 0; i < $scope.events.length; i++) {
          var event = $scope.events[i].day;
          if (current.getMonth() === event.getMonth() &&
              current.getDate() === event.getDate()) {
            return $scope.events[i].clazz;
          }
        }
      }
      return '';
    };
  }]);