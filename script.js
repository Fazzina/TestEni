angular.module("myApp", []).controller("MyController", [
  "$scope",
  function ($scope) {
    $scope.showSelfAssessment = true;
    $scope.showApprofondimento = false;
    $scope.showArchivio = false;

    $scope.switchSelfAppr = function () {
      if ($scope.showSelfAssessment == true) {
        $scope.showSelfAssessment = false;
        $scope.showApprofondimento = true;
      } else if ($scope.showApprofondimento == true) {
        $scope.showSelfAssessment = true;
        $scope.showApprofondimento = false;
      }
    };

    $scope.switchSelfArch = function () {
      if ($scope.showSelfAssessment == true) {
        $scope.showSelfAssessment = false;
        $scope.showArchivio = true;
      } else if ($scope.showArchivio == true) {
        $scope.showSelfAssessment = true;
        $scope.showArchivio = false;
      }
    };

    $scope.switchApprArch = function () {
      if ($scope.showApprofondimento == true) {
        $scope.showApprofondimento = false;
        $scope.showArchivio = true;
      } else if ($scope.showArchivio == true) {
        $scope.showApprofondimento = true;
        $scope.showArchivio = false;
      }
    };
  },
]);
miao;
