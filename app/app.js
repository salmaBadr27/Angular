var myApp = angular.module("myApp", []);

// //function run before your app run
// myApp.config(function() {});

// //function run when your app run
// myApp.run(function() {});

myApp.controller("myController", [
  "$scope",
  function($scope) {
    $scope.names = [
      { name: "first", rate: 50 },
      { name: "second", rate: 100 },
      { name: "third", rate: 200 }
    ];
  }
]);
