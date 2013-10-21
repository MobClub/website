'use strict';

angular.module('sharesdkApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
