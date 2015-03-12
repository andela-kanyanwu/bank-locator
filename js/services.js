angular.module('BankLocator',[])
.factory('Locator', ['$http', function($http){

  var url = 'https://google.com/aindioasndoiasndoas';
  return {
    get: function (cb) {
      return $http.get(url)
        .success(cb)
    }
  };
}]);
