angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.interval = 3500;
    $scope.slides  = [
      {
        path: 'photo/Baikinman.jpg',
        title: 'バイキンマン',
        desc: '子ども美術館の前で、バイキンマンがお出迎えしてくれます。'
      },
      {
        path: 'photo/Dwarf.jpg',
        title: 'こびと',
        desc: 'かわいい女の子がポツンと立っています。'
      },      {
        path: 'photo/Frog1.jpg',
        title: 'かえる1',
        desc: 'かえるさん、誰かとお話しているようです。楽しそう。'
      },      {
        path: 'photo/Frog2.jpg',
        title: 'バイキンマン',
        desc: 'かえるさん、お花が大好きみたいです。'
      },
    ];
  }]);