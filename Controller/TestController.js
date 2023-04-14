angular.module("myApp", []).controller("TestController", [
  "$scope",
  function ($scope) {
    $scope.domande = 25;
    $scope.numbers = [];
    for (var i = 1; i <= $scope.domande; i++) {
      $scope.numbers.push(i);
    }

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    $scope.showImage = true;

    $scope.prevPage = function () {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
      $scope.showImage =
        $scope.currentPage <
        Math.ceil($scope.numbers.length / $scope.itemsPerPage) - 1;
    };

    $scope.nextPage = function () {
      if (
        $scope.currentPage <
        Math.ceil($scope.numbers.length / $scope.itemsPerPage) - 1
      ) {
        $scope.currentPage++;
      }
      $scope.showImage =
        $scope.currentPage <
        Math.ceil($scope.numbers.length / $scope.itemsPerPage) - 1;
    };

    $scope.options = ["Opzione 1", "Opzione 2", "Opzione 3", "Opzione 4"];

    //$scope.letters = ["a", "b", "c", "d"];
  },
]);
