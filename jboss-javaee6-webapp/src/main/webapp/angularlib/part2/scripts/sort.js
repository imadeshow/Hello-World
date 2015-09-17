angular.module('myApp', [ 'ui.sortable' ])
  .controller('MyController', ['$scope', function($scope) {
    var books = [
      {
        title: 'おおきなだいこん',
        author: '青井空子'
      },
      {
        title: '山の上の白い家',
        author: '河野流石'
      },
      {
        title: 'はらっぱに行こう',
        author: '海野なみ'
      },
      {
        title: '公園のお化け',
        author: '山中茂'
      },
      {
        title: 'かかしのひとりごと',
        author: '稲本豊作'
      },
      {
        title: 'ドレミのどんちゃん',
        author: '歌川奏'
      }
    ];
    $scope.books = books;

    $scope.opts = {
      stop: function(e, ui) {
        var result = books.map(function(i) {
          return i.title;
        }).join(',');
        console.log(result);
      }
    };
  }]);
