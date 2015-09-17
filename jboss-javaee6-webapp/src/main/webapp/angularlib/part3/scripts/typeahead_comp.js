angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
     $scope.keywords = ['ファーストトマト', '桃太郎トマト', 'ミディトマト', 'トマトベリー', '黒トマト', 'レモントマト', '千両ナス', '丸ナス', '小ナス', '米ナス', '水ナス', '白ナス', '白うり', 'はやとうり', 'はぐらうり', 'そうめんうり','トウガン','シシトウ', 'ピーマン', '赤ピーマン', 'パプリカ', 'バナナピーマン', 'トウモロコシ', '白トウモロコシ', '黒トウモロコシ', 'スイートコーン'];
    $scope.myCompare = function(expected, actual) {
      return expected.toLowerCase().indexOf(actual.toLowerCase()) === 0;
    };
  }]);