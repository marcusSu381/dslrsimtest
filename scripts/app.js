'use strict';

/**
 * @ngdoc overview
 * @name iat381Lab2App
 * @description
 * # iat381Lab2App
 *
 * Main module of the application.
 */
var myapp = angular
  .module('iat381Lab2App', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  myapp.config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settingsCtrl'
      })
      .when('/ency', {
        templateUrl: 'views/ency.html',
        // controller: 'encyCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

myapp.demotext=[];

myapp.demotext.push(
          {name:"name1",
          age:"12"},
          {name:"name2",
          age:"13"}
          );

