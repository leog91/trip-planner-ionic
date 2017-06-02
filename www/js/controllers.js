angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })



  .controller('HistoryCtrl', function ($scope, $stateParams, apiService, userService) {
    //

    $scope.showAll = function () {
      apiService.getItems().then(function (response) {
        var jsonBundle = response.data;
        $scope.items = jsonBundle;
      },
        function (error) {
          console.log("getBundleFail");
        });
    };



  })




  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })



  .controller('LoginCtrl', function ($scope, $state, $rootScope, userService, $cordovaGooglePlus, apiService, $ionicGoogleAuth, $ionicUser) {




    //
    /*
        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
          console.log(userDetails);
    
          userService.setUser(userDetails);
          apiService.logIn().then(function (response) {
            console.log("user exist");
            apiService.getProfile().then(function (response) {
              userService.setProfile(response.data);
            })
            $window.location.href = '/#/main';
          },
            function (error) {
              console.log("creating user");
              $window.location.href = '/#/settings';
            });
    
          console.log(userService.getEmail());
    
    
    
        })
        $scope.signout = function () {
          socialLoginService.logout();
        }
    
        $scope.$on('event:social-sign-out-success', function (event, userDetails) {
          $scope.result = userDetails;
        })
    
        //
    
    */






    $scope.signIn = function () {
      {
        $cordovaGooglePlus.login({})
          .then(function (res) {
            console.log('good');
            $scope.userData = res
            $state.go('tab.dash');
          }, function (err) {
            console.log('error');
            console.log(err);
          });
      };
      // $state.go('tab.dash');

      //      $ionicAuth.login('google');


      /*
            $ionicGoogleAuth.login().then(function (response) {
              console.log('Sign-In ok');
              $state.go('tab.dash');
            }, function (error) {
              console.log('Sign-In fail');
            });
      */


      //console.log($ionicUser.social.google.data.email);
      //   $state.go('tab.dash');

      /*.then(function (response) {
        console.log('Sign-In ok');
        $state.go('tab.dash');
      }, function (error) {
        console.log('Sign-In fail');
      });
*/
    };


  })






  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
