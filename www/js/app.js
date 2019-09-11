angular.module('app', ['ionic'])

  .factory('Projetos', function () {
    return {
      all: function () {
        var projetoString = window.localStorage['projetos'];
        if (projetoString) {
          return angular.fromJson(projetoString);
        }
        return [];
      },
      save: function (projetos) {
        window.localStorage['projetos'] = angular.toJson(projetos);
      },
      novoProjeto: function (tituloProjeto) {
        // adiciona novo projeto
        return {
          title: tituloProjeto,
          opcoes: []
        };
      },
      getUltimoAtivoIndex: function () {
        return parseInt(window.localStorage['ultimoProjetoAtivo']) || 0;
      },
      setUltimoAtivoIndex: function (index) {
        window.localStorage['ultimoProjetoAtivo'] = index;
      }
    }
  })

  .controller('AppCtrl', function ($scope, $timeout, $ionicModal, Projetos, $ionicSideMenuDelegate) {

    var criaProjeto = function (tituloProjeto) {
      var novoProjeto = Projetos.novoProjeto(tituloProjeto);
      $scope.projetos.push(novoProjeto);
      Projetos.save($scope.projetos);
      $scope.selecionarProjeto(novoProjeto, $scope.projetos.length - 1);
    }

    // carrega e inicializa todos os projetos
    $scope.projetos = Projetos.all();

    // pega o último ativo ou o primeiro projeto
    $scope.projetoAtivo = $scope.projetos[Projetos.getUltimoAtivoIndex()];

    // chamado para criar um novo projeto
    $scope.novoProjeto = function () {
      var tituloProjeto = prompt('Nome do Projeto');
      if (tituloProjeto) {
        criaProjeto(tituloProjeto);
      }
    };

    // chamado para selecionar o projeto fornecido
    $scope.selecionarProjeto = function (projeto, index) {
      $scope.projetoAtivo = projeto;
      Projetos.setUltimoAtivoIndex(index);
      $ionicSideMenuDelegate.toggleLeft(false);
    };

    // cria e carrega o modal
    $ionicModal.fromTemplateUrl('nova-opcao.html', function (modal) {
      $scope.opcaoModal = modal;
    }, {
      scope: $scope,
    });

    // chamada para quando o formulário é enviado
    $scope.criaOpcao = function (opcao) {
      if (!$scope.projetoAtivo || !opcao) {
        return;
      }
      $scope.projetoAtivo.opcoes.push({
        title: opcao.title
      });
      $scope.opcaoModal.hide();

      // meio ineficiente, mas salva os projetos
      Projetos.save($scope.projetos);
      opcao.title = "";
    };

    // abre o modal de tarefas
    $scope.novaOpcao = function () {
      $scope.opcaoModal.show();
    };

    // fecha o novo modal de tarefas
    $scope.fechaNovaOpcao = function () {
      $scope.opcaoModal.hide();
    };

    $scope.alternarProjetos = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };

    // tenta criar o primeiro projeto, adiando usando $ timeout para que tudo seja inicializado sem problemas
    $timeout(function () {
      if ($scope.projetos.length == 0) {
        while (true) {
          var tituloProjeto = prompt('Nome do primeiro projeto:');
          if (tituloProjeto) {
            criaProjeto(tituloProjeto);
            break;
          }
        }
      }
    }, 1000);

    $scope.dados = {};
  })
