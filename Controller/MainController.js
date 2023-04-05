angular.module("myApp", []).controller("MainController", [
  "$scope",
  function ($scope) {
    $scope.paginaCorrente = "Directives/selfassessment.html";

    $scope.changePage = function (pagina) {
      $scope.paginaCorrente = pagina;
    };
  },
]);
