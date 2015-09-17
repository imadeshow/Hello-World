angular.module('myApp', [ 'mgo-angular-wizard' ])
  .controller('MyController', [ '$scope', 'WizardHandler', function($scope, WizardHandler) {
    $scope.user = {
      name: '権兵衛'
    };

    $scope.onfinish = function() {
      console.log('名前：' + $scope.user.name);
      console.log('メールアドレス：' + $scope.user.mail);
      console.log('情報源：' + $scope.user.know);
      console.log('ご意見／ご感想：' + $scope.user.memo);
    }

    $scope.onfirst = function() {
      WizardHandler.wizard().goTo(0);
    }
  }]);