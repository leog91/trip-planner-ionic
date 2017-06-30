

'use strict';

angular.module('starter')
    .controller('AddItemCtrl', function ($scope, userService, apiService, item) {


        $scope.isEdit = item.getIsEdit();
        $scope.isAdd = !(item.getIsEdit());

        $scope.item = {};

        var itemId;
        apiService.getProfile().then(function (response) {
            $scope.item = item.get();
            var itemId = item.getId();
            $scope.category = item.get().category;
            $scope.myDate = item.get().date;

        }, function (error) {
            console.log("conection error");
        });

        item.clear();
        item.clearEdit();

        $scope.saveItem = function () {
            $scope.item.category = $scope.category;
            item.save($scope.item, $scope.myDate);
        }

        $scope.updateItem = function () {
            $scope.item.category = $scope.category;
            item.update($scope.item, $scope.myDate, $scope.item.id);
        }

        $scope.preset = [
            "General",
            "Food",
            "Lodging"
        ];

        $scope.categories = $scope.preset.concat(userService.getProfile().categories);




    });


