'use strict';

app.factory('wrService', function ($rootScope, $http) {

    var wrService = {};

    wrService.getReceivers = function (){
      return $http.get('https://raw.githubusercontent.com/CClerville/nflhackathon-prosworld/master/hack.data.json');
    };

    return wrService;

});
