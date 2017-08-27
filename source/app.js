
const app = angular.module('storeApp', ['ngRoute','ngStorage']);


//////////
// routing config
//////

app.config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when("/", {
    templateUrl: "views/table.html"
  });

  $routeProvider.when("/edit", {
    templateUrl: "views/edit.html"
  });

  $routeProvider.when("/product", {
    templateUrl: "views/product.html"
  });

  $routeProvider.otherwise({
    templateUrl: "views/table.html"
  });
});
