

'use strict';

angular.module('starter')
    .controller('LoginCtrl', function ($scope, $state, $rootScope, userService, $cordovaGooglePlus, apiService, $ionicGoogleAuth, $ionicUser) {



        $scope.signIn = function () {
            {
                $cordovaGooglePlus.login({})
                    .then(function (res) {
                        //  console.log('good');
                        $scope.userData = res
                        //
                        userService.setUser(res);
                        apiService.logIn().then(function (response) {
                            //console.log("user exist");
                            apiService.getProfile().then(function (response) {
                                userService.setProfile(response.data);
                            })
                            // $window.location.href = '/#/main';
                        },
                            function (error) {
                                //   console.log("creating user");
                                //td
                                //  $window.location.href = '/#/settings';
                            });



                        //
                        $state.go('tab.dash');
                    }, function (err) {
                        console.log('error');
                        console.log(err);
                    });
            };
            $state.go('tab.dash');

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


    });


