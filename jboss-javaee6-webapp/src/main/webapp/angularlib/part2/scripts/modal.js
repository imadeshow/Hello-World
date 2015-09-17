angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', '$modal', function($scope, $modal) {
    $scope.open = function () {

      var dialog = $modal.open({
        animation: true,
        templateUrl: 'modal.html',
        controller: ['$scope', '$modalInstance',
          function ($scope, $modalInstance) {
            $scope.ok = function () {
              $modalInstance.close($scope.user);
            };
            $scope.cancel = function () {
              $modalInstance.dismiss('［キャンセル］ボタンがクリックされました。');
            };
        }],
        size: 'lg',
        backdrop: 'static',
        backdropClass: 'my-back'
      });

      dialog.result.then(
        function (user) {
          console.log(user);
        }, function (msg) {
          console.log(msg);
        });
    };
  }]);