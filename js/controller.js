var app = angular.module('BankLocator', ['uiGmapgoogle-maps']);

app.controller('MainController', ['$scope', '$window', '$log', '$timeout',function($scope, $window, $log, $timeout) {

  //Gets user's current location to load the map
  window.navigator.geolocation.getCurrentPosition(function (response){
    var lat = response.coords.latitude,
        lng = response.coords.longitude;

    //To get the value of the latitude and longitude available anywhere in the app
    // $rootScope.currPosition = {lat: lat, lng: lng};

  //loads the map
    $scope.map = { 
      center: {
        latitude: lat, 
        longitude: lng
      }, 
      zoom: 16 
    };

    //sets the marker
    $scope.marker = {
      coords: {
        latitude: lat, 
        longitude: lng
      },
      options: { 
        draggable: true 
      },
      id: 0,
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          // $log.log(lat);
          // $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            // labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    }

    $timeout(function(){});
  })
}]);
