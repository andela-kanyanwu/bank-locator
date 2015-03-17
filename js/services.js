var app = angular.module('BankSearch', []);

app.factory('locator', ['$http', function($http) {
  return {
    get: function(lat, lng) {
      return $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search',
        params: {
          client_id: "BCFWS4SVPQBUKM4EEODKUYWVROZNIIVQ35ZOTAUOSL3HCDF4",
          client_secret: "14LEMG1H3AVUFQHFTNE4DR13JNDNSJJY4TX2YRXCAUN500P5",
          v: "20130815",
          ll: lat + "," + lng,
          query: "bank"
        }
      }); 
    }
  }
}])