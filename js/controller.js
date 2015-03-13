var app = angular.module('BankLocator', []);

app.controller('MainController', ['$scope', function($scope) {

  //Loads map with user's current location
  var map;

  var initializeMap = function() {
    var mapOptions = {
      zoom: 15
    };
    map = new google.maps.Map(document.getElementById('mapArea'),
      mapOptions);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
          position.coords.longitude);

        map.setCenter(pos);
      });
    }
  }
  initializeMap()

  //   // navigator.geolocation.getCurrentPosition(function success(Position){console.log(Position.coords.latitude,Position.coords.longitude );})

  //   //loads the map
  //   $scope.map = {  
  //     center: {lat and lng}, 
  //     zoom: 8 
  //   };

}]);
