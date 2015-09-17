angular.module('myApp', ['treeControl'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.opts = {
      multiSelection: false,
      nodeChildren: "children",
      dirSelectable: true,
    }

    $scope.data = [
      {
        title: 'JavaScript',
        details: 'JavaScript関連の書籍',
        children: [
          {
            title: 'JavaScript本格入門',
            url: 'http://www.wings.msn.to/index.php/-/A-03/978-4-7741-4466-5/',
            price: 2980,
            details: 'JavaScriptのプログラミングスタイルを基礎から解説します。',
            children: []
          },
          {
            title: 'JavaScriptライブラリ',
            details: 'JavaScriptの人気ライブラリを扱った書籍',
            children: [
              {
                title: 'JavaScript逆引きレシピ',
                price: 3000,
                details: '基本構文からUI開発のテクニックまでギュッとまとめたレシピ集です。',
                children: []
              },
              {
                title: 'JavaScriptライブラリ実践活用',
                price: 2580,
                details: 'たくさんあるJavaScriptライブラリの中から、役立つ、おもしろい、使えるものをピックアップしました。',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: '独習PHP',
        //url: 'http://www.wings.msn.to/index.php/-/A-03/978-4-7981-2151-2/',
        price: 3200,
        details: '基礎からきっちり身に付くPHP入門書。バージョン5.3対応です。',
        children: []
      },
      {
        title: '10日でおぼえるjQuery入門教室',
        url: 'http://www.wings.msn.to/index.php/-/A-03/978-4-7981-3332-4/',
        price: 2800,
        details: 'jQueryの仕組みから、プラグインの使い方、イベントの実装とカスタマイズの方法まで、わかりやすく丁寧に解説します。',
        children: []
      }
    ];
    $scope.onselect = function(select) {
      $scope.details = select.details;
    };
  }]);