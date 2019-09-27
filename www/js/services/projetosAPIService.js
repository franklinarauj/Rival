angular.module('app')

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
      getUltimoAtivoIndex: function () {
        return parseInt(window.localStorage['ultimoProjetoAtivo']) || 0;
      },
      setUltimoAtivoIndex: function (index) {
        window.localStorage['ultimoProjetoAtivo'] = index;
      }
    }
  })
