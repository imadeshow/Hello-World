angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.fruits = [
      'りんご',
      'みかん', [
        'あまなつ',
        'はっさく'
      ],
      'ぶどう',[
        '巨峰',
        'マスカット' ,[
          'ピオーネ'
        ]
      ]
    ];
  }]);
