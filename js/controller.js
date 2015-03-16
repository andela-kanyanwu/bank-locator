var app = angular.module('BankLocator', ['uiGmapgoogle-maps']);

app.controller('MainController', ['$scope', '$window', '$log', '$timeout', '$http', function($scope, $window, $log, $timeout, $http) {

  //Gets user's current location to load the map
  window.navigator.geolocation.getCurrentPosition(function (response){
    var lat = response.coords.latitude,
        lng = response.coords.longitude;
        console.log(lat, lng);
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

    $http({
      method: 'GET',
      url: 'https://api.foursquare.com/v2/venues/search',
      params: {
        client_id: "BCFWS4SVPQBUKM4EEODKUYWVROZNIIVQ35ZOTAUOSL3HCDF4",
        client_secret: "14LEMG1H3AVUFQHFTNE4DR13JNDNSJJY4TX2YRXCAUN500P5",
        v: "20130815",
        ll: lat + "," + lng,
        query: "bank"
      }
    }).
    success(function(reply){
      console.log("name: ", reply.response.venues[0].name);
      console.log("address: ", reply.response.venues[0].location.address);
      console.log("city: ", reply.response.venues[0].location.city);
      $scope.banks = reply.response.venues
    })
    .error( function( err, status){
      console.log( err, status);
    });
  })
}]);