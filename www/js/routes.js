angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      //quando for a pagina inicial
      .state('telaInicial', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'appCtrl'
      })
      //quando for a pagina de esportes
      .state('esportes', {
        url: '/esportes',
        templateUrl: 'templates/esportes.html',
      })
      //quando for a pagina de e-sports
      .state('e-sports', {
        url: '/e-sports',
        templateUrl: 'templates/e-sports.html',
      })
      //quando for a pagina de nova opcao
      .state('nova-opcao', {
        url: '/nova-opcao',
        templateUrl: 'templates/nova-opcao.html',
      })
      //quando for a pagina de novo projeto
      .state('novo-projeto', {
        url: '/novo-projeto',
        templateUrl: 'templates/novo-projeto.html',
      })
      //quando for a pagina de ajuda
      .state('ajuda', {
        url: '/ajuda',
        templateUrl: 'templates/ajuda.html',
      })
    $urlRouterProvider.otherwise('')
  });