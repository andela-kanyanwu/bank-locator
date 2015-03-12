var app = angular.module('BankLocator', []);

app.controller ('MainController', ['$scope', 'Locator', function($scope, Locator) {
  $scope.init = function(){
    Locator.get(function(response){
      console.log('OK', response);
    }).error(function(err){
      console.log(err);
    });
  };
}]);