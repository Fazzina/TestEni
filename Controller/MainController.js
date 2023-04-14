angular.module("myApp", []).controller("MainController", [
  "$scope",
  "$window",
  function ($scope, $window) {
    $scope.textSelfassessment =
      "Il Self Assessment è lo strumento che valuta il tuo impegno sui temi HSE (Sicurezza, Salute e Ambiente). È costituito da 5 moduli, ognuno dei quali si concentra su un obiettivo differente. Ti basteranno 30 minuti per completare il Self Assessment. Puoi salvare i tuoi progressi in qualsiasi momento e tornare più tardi.";
    $scope.textApprofondimento =
      "Il Self Assessment si concentra sui comportamenti che dovresti adottare per rendere più sicuro e sostenibile il tuo lavoro e quello di chi ti sta intorno.Le domande ti aiutano a comprendere come è meglio agire al fine di evitare incidenti, gestire il rapporto con i fornitori o, ad esempio, definire competenze e responsabilità.";

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

    $scope.redirect = function () {
      $window.location.href = "test.html";
    };
  },
]);
