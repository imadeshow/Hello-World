angular.module('myApp', [ 'angular.filter' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.members = [
      {
        f_name: '花田',
        l_name: '太郎',
        mail: 'taro@example.com',
        birth: new Date(1970, 1, 9)
      },
      {
        f_name: '鈴木',
        l_name: '智子',
        mail: 'tomoko@example.com',
        birth: new Date(1975, 10, 12)
      },
      {
        f_name: '山田',
        l_name: '久美子',
        mail: 'kumiko@example.com',
        birth: new Date(1980, 3, 2)
      },
      {
        f_name: '井上',
        l_name: '翔太',
        mail: 'shota@example.com',
        birth: new Date(1977, 10, 22)
      },
      {
        f_name: '山本',
        l_name: '花子',
        mail: 'yuji@example.com',
        birth: new Date(1974, 8, 4)
      },
      {
        f_name: '鈴木',
        l_name: '英恵',
        mail: 'hanae@example.com',
        birth: new Date(1978, 10, 4)
      }
    ];
  }]);
