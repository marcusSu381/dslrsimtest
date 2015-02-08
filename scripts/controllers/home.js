'use strict';



  myapp.controller('HomeCtrl', function ($scope) {
    $scope.settings = [
    {'filename': '1',
     'aperture': 'f/2'},
    {'filename': '2',
     'aperture': 'f/2.8'},
     {'filename': '3',
     'aperture': 'f/4'},
     {'filename': '4',
     'aperture': 'f/5.6'},
     {'filename': '5',
     'aperture': 'f/8'},
    {'filename': '6',
     'aperture': 'f/11'},
     {'filename': '7',
     'aperture': 'f/16'},
     {'filename': '8',
     'aperture': 'f/22'}
  ];
  $scope.demotext=myapp.demotext;
  });


myapp.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data.json').success(function(data) {
    $scope.settings = data;
 
  });
}]);

