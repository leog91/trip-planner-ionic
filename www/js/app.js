// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
  'starter.controllers',
  'starter.services',
  'ionic.native',
  'ionic.cloud',
 // 'ngCordova.plugins.nativeStorage'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  /*
    .config(function (socialProvider) {
      socialProvider.setGoogleKey("15090035877-h3c92ambrt0b7fk31ksfubkedr3faor3.apps.googleusercontent.com");
    })
  */

  .config(function ($ionicCloudProvider) {

    $ionicCloudProvider.init({
      "core": {
        "app_id": "fa29f981"
      }
      /*,
      "auth": {
        "google": {
          "webClientId": "15090035877-h3c92ambrt0b7fk31ksfubkedr3faor3.apps.googleusercontent.com",
          "scope": ["permission1", "permission2"]
        }
      }
*/

    })
  })





  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.history', {
        url: '/history',
        views: {
          'tab-history': {
            templateUrl: 'templates/tab-history.html',
            controller: 'HistoryCtrl'
          }
        }
      })

      .state('tab.addItem', {
        url: '/addItem',
        views: {
          'tab-addItem': {
            templateUrl: 'templates/tab-addItem.html',
            controller: 'AddItemCtrl'
          }
        }
      })

      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })


      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })


      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'SettingsCtrl'
          }
        }
      });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
