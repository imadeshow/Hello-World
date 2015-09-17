angular.module('myApp', [ 'ngTagsInput' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.myTags = [
      { text: 'JavaScript' },
      { text: 'AngularJS' },
      { text: 'jQuery' }
    ];

    $scope.onAdded = function(tag) {
      console.log('タグが追加されました。');
      console.log(tag);
    };
  }]);