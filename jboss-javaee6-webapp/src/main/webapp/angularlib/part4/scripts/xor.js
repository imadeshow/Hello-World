angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.books1 = [
      {
        isbn: '978-4-7741-7078-7',
        title: 'サーブレット＆JSPポケットリファレンス',
      },
      {
        isbn: '978-4-7981-3546-5',
        title: 'JavaScript逆引きレシピ',
      },
      {
        isbn: '978-4-7741-6566-0',
        title: 'PHPライブラリ＆サンプル実践活用',
      }
    ];

    $scope.books2 = [
      {
        isbn: '978-4-7741-7078-7',
        title: 'サーバサイドJavaポケットリファレンス',
      },
      {
        isbn: '978-4-7980-4179-7',
        title: 'ASP.NET MVC 5実践プログラミング',
      },
      {
        isbn: '978-4-7741-6566-0',
        title: 'PHPライブラリ＆サンプル実践活用',
      }
    ];
  }]);
