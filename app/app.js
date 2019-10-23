//module with its dependencies
var myApp = angular.module("myApp", ["ngRoute"]);

// //function run before your app start
myApp.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html"
      })
      .when("/directory", {
        templateUrl: "views/directory.html",
        controller: "myController"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

//controller which wraps all functionality of our view or main view
myApp.controller("myController", [
  "$scope",
  function($scope) {
    //remove new item
    $scope.removeItem = function(item) {
      var removedItem = $scope.items.indexOf(item);
      $scope.items.splice(removedItem, 1);
    };

    //add an item
    $scope.addItem = function() {
      $scope.items.push({
        name: $scope.item.name,
        periority: {
          title: $scope.item.periority.title,
          color: `${
            $scope.item.periority.title == "low"
              ? "yellow"
              : false || $scope.item.periority.title == "medium"
              ? "green"
              : false || $scope.item.periority.title == "high"
              ? "red"
              : false
          }  `
        },
        avilable: true
      });

      //empty form after submitting add functionality
      $scope.item.name = "";
      $scope.item.periority.title = "";
    };

    //temporary data
    $scope.items = [
      {
        name: "Eat",
        avilable: true,
        periority: {
          title: "medium",
          color: "green"
        },
        no: 2
      },
      {
        name: "love",
        avilable: true,
        periority: {
          title: "low",
          color: "yellow"
        },
        no: 3
      },
      {
        name: "pray",
        avilable: true,
        periority: {
          title: "high",
          color: "red"
        },
        no: 1
      }
    ];
  }
]);
