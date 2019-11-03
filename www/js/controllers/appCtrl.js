angular.module('app')

  .controller('appCtrl', function ($scope, $ionicModal) {

    // cria e carrega o modal de ajuda
    $ionicModal.fromTemplateUrl('templates/ajuda.html', function (modal) {
      $scope.ajudaModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de ajuda
    $scope.abreAjuda = function () {
      $scope.ajudaModal.show();
    };

    // fecha o novo modal de ajuda
    $scope.fechaAjuda = function () {
      $scope.ajudaModal.hide();
    };

    // cria e carrega o modal de esportes
    $ionicModal.fromTemplateUrl('templates/esportes.html', function (modal) {
      $scope.esportesModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de esportes
    $scope.abreEsportes = function () {
      $scope.esportesModal.show();
    };

    // fecha o novo modal de esportes
    $scope.fechaEsportes = function () {
      $scope.esportesModal.hide();
    };

    // cria e carrega o modal de e-sports
    $ionicModal.fromTemplateUrl('templates/e-sports.html', function (modal) {
      $scope.esportsModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de e-sports
    $scope.abreEsports = function () {
      $scope.esportsModal.show();
    };

    // fecha o novo modal de e-sports
    $scope.fechaEsports = function () {
      $scope.esportsModal.hide();
    };

    // cria e carrega o modal de e-sports1
    $ionicModal.fromTemplateUrl('templates/e-sports-1.html', function (modal) {
      $scope.esportsModal1 = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de e-sports1
    $scope.abreEsports1 = function () {
      $scope.esportsModal1.show();
    };

    // fecha o novo modal de e-sports1
    $scope.fechaEsports1 = function () {
      $scope.esportsModal1.hide();
    };

    // cria e carrega o modal de esportes1
    $ionicModal.fromTemplateUrl('templates/esportes-1.html', function (modal) {
      $scope.esportesModal1 = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de esportes1
    $scope.abreEsportes1 = function () {
      $scope.esportesModal1.show();
    };

    // fecha o novo modal de esportes1
    $scope.fechaEsportes1 = function () {
      $scope.esportesModal1.hide();
    };

  })
