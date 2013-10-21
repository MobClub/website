'use strict';

angular.module('sharesdkApp')
  .controller('FeatureCtrl', ['$scope', 'Serviceproviders', function ($scope, Serviceproviders) {
     $scope.team = {};

     var promise = Serviceproviders.getServices();
     promise.then(function(resp) {
         $scope.services = resp.data;
     });


  }]);
