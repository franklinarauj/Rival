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

    // cria e carrega o modal de equipes
    $ionicModal.fromTemplateUrl('templates/equipes.html', function (modal) {
      $scope.equipesModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de equipes
    $scope.abreEquipes = function () {
      $scope.equipesModal.show();
    };

    // fecha o novo modal de equipes
    $scope.fechaEquipes = function () {
      $scope.equipesModal.hide();
    };

    // cria e carrega o modal de formulario equipe
    $ionicModal.fromTemplateUrl('templates/formEquipe.html', function (modal) {
      $scope.formEquipeModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de formulario equipe
    $scope.abreFormEquipe = function () {
      $scope.formEquipeModal.show();
    };


    // fecha o novo modal de formulario equipe
    $scope.fechaFormEquipe = function () {
      $scope.formEquipeModal.hide();
    };

    // cria e carrega o modal de campeonatos
    $ionicModal.fromTemplateUrl('templates/campeonatos.html', function (modal) {
      $scope.campeonatosModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de campeonatos
    $scope.abreCampeonatos = function () {
      $scope.campeonatosModal.show();
    };

    // fecha o novo modal de campeonatos
    $scope.fechaCampeonatos = function () {
      $scope.campeonatosModal.hide();
    };

    // cria e carrega o modal de campeonato
    $ionicModal.fromTemplateUrl('templates/campeonato.html', function (modal) {
      $scope.campeonatoModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de campeonato
    $scope.abreCampeonato = function () {
      $scope.campeonatoModal.show();
    };

    // fecha o novo modal de campeonato
    $scope.fechaCampeonato = function () {
      $scope.campeonatoModal.hide();
    };

    // cria e carrega o modal de tabela
    $ionicModal.fromTemplateUrl('templates/tabela.html', function (modal) {
      $scope.tabelaModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de tabela
    $scope.abreTabela = function () {
      $scope.tabelaModal.show();
    };

    // fecha o novo modal de tabela
    $scope.fechaTabela = function () {
      $scope.tabelaModal.hide();
    };

    // cria e carrega o modal de eliminatoria
    $ionicModal.fromTemplateUrl('templates/eliminatoria.html', function (modal) {
      $scope.eliminatoriaModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de eliminatoria
    $scope.abreEliminatoria = function () {
      $scope.eliminatoriaModal.show();
    };

    // fecha o novo modal de eliminatoria
    $scope.fechaEliminatoria = function () {
      $scope.eliminatoriaModal.hide();
    };

    // cria e carrega o modal de formulario campeonato
    $ionicModal.fromTemplateUrl('templates/formCampeonato.html', function (modal) {
      $scope.formCampeonatoModal = modal;
    }, {
      scope: $scope,
    });

    // abre o modal de formulario campeonato
    $scope.abreFormCampeonato = function () {
      $scope.formCampeonatoModal.show();
    };

    // fecha o novo modal de formulario campeonato
    $scope.fechaFormCampeonato = function () {
      $scope.formCampeonatoModal.hide();
    };

  })
