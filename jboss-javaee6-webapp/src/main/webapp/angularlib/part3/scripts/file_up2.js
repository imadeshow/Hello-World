angular.module('myApp', ['ngFileUpload'])
  .controller('MyController', ['$scope', 'Upload', function ($scope, Upload) {
    $scope.$watch('files', function () {
      $scope.upload($scope.files);
    });

    $scope.upload = function(files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          Upload.upload({
              url: 'upload.php',
              file: file
          })
          .success(function (data, status, headers, config) {
             console.log('アップロード完了：' + config.file.name);
          });
        }
      }
    };
  }]);