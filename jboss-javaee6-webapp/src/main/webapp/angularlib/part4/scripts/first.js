angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.books = [
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
      },
      {
        title: 'ソラいろはドレ？',
        author: '歌川奏'
      }
    ];
  }]);
