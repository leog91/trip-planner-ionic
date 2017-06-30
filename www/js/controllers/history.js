

'use strict';

angular.module('starter')
    .controller('HistoryCtrl', function ($scope, $stateParams, apiService, userService) {

        $scope.showAll = function () {
            apiService.getItems().then(function (response) {
                var jsonBundle = response.data;
                $scope.items = jsonBundle;
            },
                function (error) {
                    console.log("getBundleFail");
                });
        };




    });


