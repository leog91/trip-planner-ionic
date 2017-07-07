'use strict';

/**
 * @ngdoc function
 * @name tripplannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripplannerApp
 */
angular.module('starter')
    .controller('SettingsCtrl', function ($scope, apiService, userService, validator) {

        $scope.category = "";

        $scope.categories = userService.getProfile().categories;

        $scope.saveSettings = function () {
            if (validator.checkSingleSelector($scope.country)) {
                apiService.saveSettings($scope.country, $scope.groupSize)
                    .then(function (response) {
                       
                        apiService.getProfile().then(function (response) {
                            userService.setProfile(response.data);
                        })
                    },
                    function (error) {
                        console.log("save Fail");
                    });
            }
        };

        function isValid() {
            return ($scope.category != null && $scope.category.length > 1);
        }


        function saveCategory() {
            apiService.addCategory($scope.category)
                .then(function (response) {
                    $scope.category = "";
                   
                    apiService.getProfile().then(function (response) {
                        userService.setProfile(response.data);
                        $scope.categories = userService.getProfile().categories;
                    })
                },
                function (error) {
                    console.log("addCat fail");
                });
        }


        $scope.addCategory = function () {
            if (isValid()) {
                saveCategory()
            }
            else {
               
            }
        }


        $scope.deleteCategory = function (index) {
            var c = $scope.categories[index];
            apiService.removeCategory(c)
                .then(function (response) {
                   
                    apiService.getProfile().then(function (response) {
                        userService.setProfile(response.data);
                        $scope.categories = userService.getProfile().categories;
                    })
                },
                function (error) {
                    console.log("remove fail");
                });

        };



        $scope.country = userService.getProfile().currentCurrency;

        $scope.groupSize = userService.getProfile().groupSize;

        $scope.image = userService.getImage();

        $scope.name = userService.getName();

        $scope.countries = [

            { name: 'Argentina', code: 'ARS' },
            { name: 'Australia', code: 'AUD' },
            { name: 'Bolivia', code: 'BOB' },
            { name: 'Brazil', code: 'BRL' },
            { name: 'Canada', code: 'CAD' },
            { name: 'Chile', code: 'CLP' },
            { name: 'China', code: 'CNY' },
            { name: 'Norway', code: 'NOK' },
            { name: 'Paraguay', code: 'PYG' },
            { name: 'Peru', code: 'PEN' },
            { name: 'Portugal', code: 'EUR' },
            { name: 'Russian Federation', code: 'RUB' },
            { name: 'Spain', code: 'EUR' },
            { name: 'Sweden', code: 'SEK' },
            { name: 'Switzerland', code: 'CHF' },
            { name: 'Turkey', code: 'TRY' },
            { name: 'United Kingdom', code: 'GBP' },
            { name: 'United States', code: 'USD' },
            { name: 'Uruguay', code: 'UYU' },
            { name: 'Venezuela', code: 'VEF' },
            { name: 'Zimbabwe', code: 'ZWL' }
        ];


    });
