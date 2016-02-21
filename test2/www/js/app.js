// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.proWorld', {
    url: '/proWorld',
    views: {
      'menuContent': {
        templateUrl: 'templates/proWorld.html'
      }
    }
  })
  .state('app.dailyInput', {
    url: '/dailyInput',
    views: {
      'menuContent': {
        templateUrl: 'templates/dailyInput.html'
      }
    }
  })
  .state('app.proBoard', {
    url: '/proBoard',
    views: {
      'menuContent': {
        templateUrl: 'templates/proBoard.html'
      }
    }
  })
  .state('app.player', {
    url: '/player',
    views: {
      'menuContent': {
        templateUrl: 'templates/player.html',
        controller: 'playerCtrl'
      }
    }
  })
  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  .state('app.accountSettings', {
      url: '/accountSettings',
      views: {
        'menuContent': {
          templateUrl: 'templates/accountSettings.html'
        }
      }
    })


  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');
});
