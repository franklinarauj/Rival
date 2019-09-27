angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      //quando for a pagina inicial
      .state('telaInicial', {
        url: '/',
        templateUrl: 'templates/tela-inicial.html',
        controller: 'menuCtrl'
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
    $urlRouterProvider.otherwise('')
  });