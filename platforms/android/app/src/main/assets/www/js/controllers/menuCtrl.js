angular.module('app')

  .controller('MenuCtrl', function ($scope, $rootScope, $ionicPopup, $location, calculoImc) {

    //objeto que representa os valores na tela de cálculo
    $scope.dados = {};

    //função para executar o cálculo
    $scope.calcular = function (dados) {
      if (!dados.qntd) {
        //se o peso não foi preenchido exibe um popup informando que o campo é obrigatório
        $ionicPopup.alert({
          title: 'Error',
          template: 'Informar a quantidade de jogadores é obrigatório.'
        }); //USAR NAS TELAS DE INPUT DOS GRUPOS E/OU TORNEIO
      } else if (!dados.jogador) {
        //se a altura não foi preenchida exibe um popup informando que o campo é obrigatório
        $ionicPopup.alert({
          title: 'Error',
          template: 'O espaço do nome do jogador não pode estar em branco.'
        }); //USAR NAS TELAS DE INPUT DOS GRUPOS E/OU TORNEIO
      } else {
        //se todos os dados foram preenchidos, executa o cálculo do IMC e pega qual faixa o IMC corresponde
        var imc = calculoImc.calcular(dados.peso, dados.altura);
        var faixa = calculoImc.getFaixa(imc);

        //passa para o $rootScope os valores calculados e redireciona para a tela do resultado
        $rootScope.imc = imc;
        $rootScope.faixa = faixa;
        $location.path('/tela-inicial');
      }
    }
  });
