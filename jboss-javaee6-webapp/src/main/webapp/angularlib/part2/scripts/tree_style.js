angular.module('myApp', ['treeControl'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.opts = {
      multiSelection: true,
      nodeChildren: "children",
      dirSelectable: true,
    }

     $scope.data = [
       {
         title: 'JavaScript',
         children: [
           {
             title: 'JavaScript本格入門',
             url: 'http://www.wings.msn.to/index.php/-/A-03/978-4-7741-4466-5/',
             price: 2980,
             children: []
           },
           {
             title: 'JavaScriptライブラリ', 
             children: [
               {
                 title: 'JavaScript逆引きレシピ',
                 price: 3000,
                 children: []
               },
               {
                 title: 'JavaScriptライブラリ実践活用',
                 price: 2580,
                 children: []
               }
             ]
           }
         ]
       },
       {
         title: '独習PHP',
         price: 3200,
         children: []
       },
       {
         title: '10日でおぼえるjQuery入門教室',
         url: 'http://www.wings.msn.to/index.php/-/A-03/978-4-7981-3332-4/',
         price: 2800,
         children: []
       }
     ];
  }]);