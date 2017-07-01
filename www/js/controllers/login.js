/*

'use strict';

angular.module('starter')
    .controller('LoginCtrl', function ($scope, $state, $ionicPlatform, $cordovaNativeStorage, $rootScope, userService, $cordovaGooglePlus, apiService, $ionicGoogleAuth, $ionicUser) {



        $scope.signIn = function () {
            {
                $cordovaGooglePlus.login({})
                    .then(function (res) {
                        //  console.log('good');
                        $scope.userData = res
                        //



                        $cordovaNativeStorage.setItem("user", res).then(function (value) {
                            // $log.log(value);
                            $cordovaNativeStorage.getItem("user").then(function (value) {
                                //userService.setTest(value);
                                userService.setUser(value);

                                //  $log.log(value);
                            }, function (error) {
                                //$log.log(error);
                            });
                        }, function (error) {
                            //$log.log(error);
                        });






                        //  userService.setUser(res);
                        apiService.logIn().then(function (response) {
                            //console.log("user exist");
                            apiService.getProfile().then(function (response) {
                                //userService.setProfile(response.data);
                                //nativeSave
                                userService.setProfile(response.data);
                                storeProfile(response.data);

                            })
                            // $window.location.href = '/#/main';
                        },
                            function (error) {


                                $cordovaNativeStorage.getItem("profile").then(function (value) {
                                    //userService.setTest(value);
                                    userService.setProfile(value);

                                    $log.log("getProfile Ok");
                                }, function (error) {
                                    $log.log(error);
                                    $log.log("getProfile fail");
                                });




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


        };



        function storeProfile(profile) {

            $cordovaNativeStorage.setItem("profile", profile).then(function (value) {

                $log.log(value);

            }, function (error) {
                $log.log(error);
            });

        }

    });



*/


////OLD///

//*
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
                        $state.go('tab.addItem');
                    }, function (err) {
                        console.log('error');
                        console.log(err);
                    });
            };
            $state.go('tab.addItem');


        };


    });
//*/