var app = angular.module('BankLocator', ['uiGmapgoogle-maps', 'BankSearch']);

app.controller('MainController', ['$scope', '$window', '$log', '$timeout', 'locator', function($scope, $window, $log, $timeout, locator) {

  //Gets user's current location to load the map
  window.navigator.geolocation.getCurrentPosition(function(response) {
    var lat = response.coords.latitude,
      lng = response.coords.longitude;

    //loads the map
    $scope.map = {
      center: {
        latitude: lat,
        longitude: lng
      },
      zoom: 15
    };

    //Get the marker points in an array
    var createMarkers = [];

    $scope.markers = createMarkers;

    //call the bank location api here
    locator.get(lat, lng).
    success(function(reply) {
      $scope.banks = reply.response.venues;

      var len = reply.response.venues.length;
      var markerTitle = "";
      for (var i = 0; i < len; i++) {
        if (reply.response.venues[i].location.address === undefined) {
          markerTitle = reply.response.venues[i].name;
        } else {
          markerTitle = reply.response.venues[i].name + ", " + reply.response.venues[i].location.address;
        }
        createMarkers.push({
          latitude: reply.response.venues[i].location.lat,
          longitude: reply.response.venues[i].location.lng,
          title: markerTitle,
          id: i
        });
      }
    }).
    error(function(err, status) {
      console.log(err, status);
    });
  });

  $timeout(function() {});
}]);
