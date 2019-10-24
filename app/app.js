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
  "$http",
  function($scope, $http) {
    //Remove new item
    $scope.removeItem = function(item) {
      var removedItem = $scope.items.indexOf(item);
      $scope.items.splice(removedItem, 1);
    };

    //Add an item
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

    //access to data ("View all Items")
    $http({
      method: "GET",
      url: "data/data.json"
    }).then(
      function(data) {
        $scope.items = data.data;
        console.log(data);
      },
      function(error) {
        console.log("Error:", error);
      }
    );
  }
]);
