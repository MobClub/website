'use strict';

angular.module('sharesdkApp')
  .service('Serviceproviders', ['$http', '$q', function Serviceproviders($http, $q) {
    var deferred = $q.defer();
    $http.get('resources/services.json').then(function(data) {
       deferred.resolve(data);
    });
    this.getServices = function(){
        return deferred.promise;
    };
  }]);
